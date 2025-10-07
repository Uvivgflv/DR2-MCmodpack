const MidnightArmmor = event =>{
    //#region REMOVE AFTER RELEASE
    event.modify('minecraft:wooden_sword', item =>{
        item.attackDamage = 481
        item.maxDamage = 1
        item.rarity = 'EPIC'
    })
    //#endregion
    //#region shadowroot tools durability & dig speed
    var ShadowrootTools = [
        'midnight:shadowroot_sword',
        'midnight:shadowroot_shovel',
        'midnight:shadowroot_pickaxe',
        'midnight:shadowroot_axe',
        'midnight:shadowroot_hoe'
    ]

    event.modify('midnight:shadowroot_sword', item=>{
        item.attackDamage = 2
    })

    var NightstoneTools = [
        'midnight:nightstone_sword',
        'midnight:nightstone_shovel',
        'midnight:nightstone_pickaxe',
        'midnight:nightstone_axe',
        'midnight:nightstone_hoe'
    ]

    var EboniteTools = [
        'midnight:ebonite_sword',
        'midnight:ebonite_shovel',
        'midnight:ebonite_pickaxe',
        'midnight:ebonite_axe',
        'midnight:ebonite_hoe'
    ]
    //#endregion
}