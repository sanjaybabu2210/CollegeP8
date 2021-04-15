const Column = ({ eventData }) => {
    const list = eventData.map( ev => {
        if(ev.categories[0].id === 8){
            return <div>
            <ul>
                <li>ID: <strong>{ ev.id }</strong></li>
                <li>Date: <strong> {ev.geometries[0].date} </strong></li>
            </ul>
            </div>
        }
    })

    return <div className="column-data">
        {list}
    </div>
}

export default Column;