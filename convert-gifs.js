const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const robloxCategories = [
      "/1_RedPortal.gif", "/2_BluePortal.gif", "/3_CleanedFloor.gif", "/4_Firework.gif", "/5_LanternGlow.gif", 
      "/6_ShootingBuble.gif", "/7_SmokedEngine.gif", "/8_Fountain.gif", "/9_HalloweenSelectedPart.gif", "/10_OpenTreasurebox.gif",
      "/Jetpack/1_Jetpack.gif", "/Jetpack/2_BrokenJetpack.gif", "/Jetpack/3_RichAuraJetpack.gif", "/Jetpack/4_OrangeAuraJetpack.gif", "/Jetpack/5_BlueAuraJectpack.gif",
      "/Environment/1_Petals.gif", "/Environment/2_WaterTrails.gif", "/Environment/3_ConcertStage.gif", "/Environment/4_HalloweenEnvironment.gif", "/Environment/5_ChristmasEnvironment.gif"
];

function convert(gifPath) {
    const fullPath = path.join(publicDir, gifPath);
    const mp4Path = fullPath.replace('.gif', '.mp4');
    
    if (!fs.existsSync(fullPath)) {
        console.log('Not found:', fullPath);
        return Promise.resolve();
    }
    if (fs.existsSync(mp4Path)) {
        console.log('Already exists:', mp4Path);
        return Promise.resolve();
    }
    
    console.log('Converting', gifPath);
    
    return new Promise((resolve, reject) => {
        const proc = spawn(ffmpegPath, [
            '-i', fullPath,
            '-c:v', 'libx264',
            '-pix_fmt', 'yuv420p',
            '-profile:v', 'baseline',
            '-level', '3.0',
            '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2',
            '-crf', '26',
            '-preset', 'fast',
            mp4Path
        ]);
        
        proc.on('close', code => {
            if (code === 0) resolve();
            else reject(`FFmpeg exited with code ${code} for ${gifPath}`);
        });
    });
}

async function run() {
    for (const gif of robloxCategories) {
        await convert(gif);
    }
    console.log('All done!');
}

run().catch(console.error);
