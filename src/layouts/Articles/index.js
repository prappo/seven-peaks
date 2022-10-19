import { forwardRef } from 'react';
import { Card, NoResultFound } from '../../components';

import './index.scss'

const Articales = forwardRef(({ className = '',
    column = 'column-3',
    result = [], children
}, ref) => {

    if (!result.length) {
        return <NoResultFound />
    }

    let wrapperClasses = [
        'seven-peaks-articles',
        className,
        column
    ]

    return (
        <div className={wrapperClasses.join(' ')}>
            {
                result.map((item, index) => (
                    <div ref={result.length === index + 1 ? ref : null} className="seven-peaks-article" index={index} key={item.id}>
                        {children ? children(item, index) : <Card content={item} showTrailText={true} />}
                    </div>
                ))
            }
        </div>
    )
})

export default Articales;