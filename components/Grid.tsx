import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data/gridData'

function Grid() {
    return (
        <section id='about'>
            <BentoGrid>
                {gridItems.map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        description={item.description}
                        title={item.title}
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        spareImg={item.spareImg}
                        titleClassName={item.titleClassName}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid