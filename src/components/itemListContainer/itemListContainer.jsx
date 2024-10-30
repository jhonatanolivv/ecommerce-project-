import './itemListContainer.scss'


export function ItemListContainer({greeting}) {
    return (
        <div className='item-list-container' style={{padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center'}}>
            <h1>{greeting}</h1>
        </div>
    )
}