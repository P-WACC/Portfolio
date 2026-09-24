const gifFrames = require('gif-frames');
const fs = require('fs');

const files = [
      "/1_RedPortal.gif",
      "/2_BluePortal.gif",
      "/3_CleanedFloor.gif",
      "/4_Firework.gif",
      "/5_LanternGlow.gif",
      "/6_ShootingBuble.gif",
      "/7_SmokedEngine.gif",
      "/8_Fountain.gif",
      "/9_HalloweenSelectedPart.gif",
      "/10_OpenTreasurebox.gif",
      "/Jetpack/1_Jetpack.gif",
      "/Jetpack/2_BrokenJetpack.gif",
      "/Jetpack/3_RichAuraJetpack.gif",
      "/Jetpack/4_OrangeAuraJetpack.gif",
      "/Jetpack/5_BlueAuraJectpack.gif"
];

async function run() {
  for (const f of files) {
    const input = './public' + f;
    const output = './public' + f.replace('.gif', '.jpg');
    try {
      if (!fs.existsSync(output)) {
        const frameData = await gifFrames({ url: input, frames: 0, outputType: 'jpg' });
        frameData[0].getImage().pipe(fs.createWriteStream(output));
        console.log('Saved ' + output);
      }
    } catch(e) {
      console.error('Failed ' + f, e);
    }
  }
}
run();
