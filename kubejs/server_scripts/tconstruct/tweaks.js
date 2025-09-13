const RegistryTCONTweaks = event => {
    event.remove({id:'twilight_construct:smeltery/alloying/fiery_essence'})
//fixed it
    event.custom({"type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 90,
      "tag": "forge:molten_carminite"
    },
    {
      "amount": 100,
      "tag": "tconstruct:blazing_blood"
    },
    {
      "amount": 30,
      "tag": "tconstruct:molten_debris"
    }
  ],
  "result": {
    "amount": 50,
    "fluid": "twilight_construct:fiery_blood"
  },
  "temperature": 1100}).id('dr2:tcon/fix/fiery_essence')
}