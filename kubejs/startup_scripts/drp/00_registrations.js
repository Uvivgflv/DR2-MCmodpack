//priority 0

const DRPBlockRegistries = (event) => {
    const MaterialBlocks = [
        'unfired_coke_bricks'
    ]
};

const DRPItemRegistries = (event) => {
    //mob drop
    const DropItems = [
        'test_drop_item'
    ]
    
    DropItems.forEach(item => {
        const trKey = `item.kubejs.${item}`;
        event.create(item).translationKey(trKey);
    });

    const MaterialItems = [
        'glass_mix',
        'flint_shard'
    ]

    MaterialItems.forEach(item => {
        const trKey = `item.kubejs.${item}`;
        event.create(item).translationKey(trKey);
    });

};