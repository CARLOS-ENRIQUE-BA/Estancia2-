import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import "../../assets/style/Home/calendar.css";

function Calendario() {

    const [events, setEvents] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3003/calendario/getAll');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const formattedEvents = data.map(event => ({
                    title: event.nombre,
                    start: event.fecha_inicio,
                    end: event.fecha_fin,
                    estatus: event.estatus,
                }));
                setEvents(formattedEvents);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData(); // Llamar a la función fetchData al montar el componente

        // Establecer un intervalo para actualizar los datos cada cierto tiempo (opcional)
        const interval = setInterval(fetchData, 60000); // Llama a fetchData cada 60 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);



    return (
        <>
            <div className="calendar">
                <FullCalendar locales={[esLocale]} plugins={[dayGridPlugin]} initialview={"dayGridMonth"} events={events} />
            </div>
        </>
    );
}

export default Calendario;