import Chart from 'react-google-charts'

const GraphsPage = () => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    const currentlyMonth = new Date().getMonth();
    let lastMonth = currentlyMonth - 1;
    if(lastMonth===-1) lastMonth=11
    const datosMockeados = [[1,13],[2,14],[3,17],[4,11],[5,13],[6,11],[7,23],[8,12],[9,19],[10,21],[11,22],[12,11],[13,12],[14,12],[15,22],[16,16],[17,9],[18,17],[19,20],[20,14],[21,13],[22,15],[23,23],[24,15],[25,17],[26,19],[27,21],[28,20],[29,22],[30,21],[31,23]]
    const data = [['Día', 'Cantidad de logueos']]
    datosMockeados.map(datoMockeado=>{
        data.push(datoMockeado)
    })
    const currentlyDay = new Date().getDay()
    const currentlyDate = new Date().getDate()
    return (
        <>
            <div className='ml-4 mt-4'>
                <h3>Gráficas de logueos mensuales</h3>
                <p>En este lugar se muestran gráficas estadisticas sobre la cantidad de logueos por día en el último mes</p>
            </div>
            <div className='my-container d-flex'>
                <Chart
                width={'75%'}
                height={'400px'}
                chartType='Bar'
                loader={<div>Cargando gráfica</div>}
                data={data}
                options={{
                    chart:{
                        title:'Cantidad de logueos por dia en el último mes',
                        subtitle:months[lastMonth],
                        chartArea:{width:'100%'}
                    }
                }}
                />
                <Chart
                width={'50%'}
                height={'400px'}
                chartType='Bar'
                loader={<div>Cargando gráfica</div>}
                data={[['Día','Logueos'],[1,29]]}
                options={{
                    chart:{
                        title:'Cantidad de logueos en el día',
                        subtitle: days[currentlyDay]+' '+currentlyDate,
                        chartArea:{width:'100%'},
                        colors:['#b0120a']
                    }
                }}
                />
            </div>
            
        </>
    )
}

export default GraphsPage
