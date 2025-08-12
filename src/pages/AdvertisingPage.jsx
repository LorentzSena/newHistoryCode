import { React, useState } from 'react';
import styled from 'styled-components';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { ptBR } from 'date-fns/locale';
import { format, getDay, parse, startOfWeek } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const AdvertisingPage = () => {
    const [events, setEvents] = useState([
        {
            title: 'Post 1',
            start: new Date(2024, 11, 15, 10, 0),
            end: new Date(2024, 11, 15, 11, 0),
        },
        {
            title: 'Post 2',
            start: new Date(2024, 11, 20, 14, 0),
            end: new Date(2024, 11, 20, 15, 0),
        },
        {
            title: 'Post 3',
            start: new Date(2024, 11, 31, 16, 0),
            end: new Date(2024, 11, 31, 17, 0),
        },
        {
            title: 'Post 4',
            start: new Date(2025, 0, 1, 9, 0),
            end: new Date(2025, 0, 1, 10, 0),
        }
    ]);

    const locales = {
        'pt-BR': ptBR
    }

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales
    })
    return (
        <>
            <HeaderContainer>
                <h1>Página de Publicidade</h1>
            </HeaderContainer>
            <ContentContainer>
                <CalendarContainer>
                    <CalendarStyles>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 700 }}
                            culture="pt-BR"
                            defaultView="month"
                            views={['month', 'week', 'day']}
                            step={60}
                            timeslots={1}
                            messages={{
                                next: "Próximo",
                                today: "Hoje",
                                previous: "Anterior",
                                month: "Mês",
                                week: "Semana",
                                day: "Dia",
                                agenda: "Agenda",
                                date: "Data",
                                time: "Hora",
                                event: "Evento",
                                noEventsInRange: "Não há postagens neste período."
                            }}
                        />
                    </CalendarStyles>
                </CalendarContainer>
                <FinancialDataContainer>
                    <h2>Próximas Postagens</h2>
                    <p>Informações sobre posts</p> {/* adicionar aqui proximas psotagens com suas informações */}
                </FinancialDataContainer>
            </ContentContainer>
        </>
    )
};

const HeaderContainer = styled.div`
    margin-bottom: 3em;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3em;
`;

const CalendarContainer = styled.div`
    flex: 1;
    color: #fff;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(201, 162, 39, 0.2);
    min-height: 700px;
    display: flex;
    flex-direction: column;
`;

const FinancialDataContainer = styled.div`
    flex: 1;
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    
    h2 {
        margin-bottom: 1em;
        color: #333;
    }
    
    p {
        color: #666;
        line-height: 1.6;
    }
`;

// Estilos para organizar o calendário
const CalendarStyles = styled.div`
  .rbc-calendar {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #2c2c2c;
    border-radius: 12px;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .rbc-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #C9A227;
    border-bottom: 1px solid #e9ecef;
    flex-wrap: wrap;
    gap: 10px;
  }

  .rbc-toolbar-label {
    font-size: 1.2em;
    font-weight: 600;
    color: #333;
    flex: 1;
    text-align: center;
  }

  .rbc-btn-group {
    display: flex;
    gap: 5px;
  }

  .rbc-btn-group button {
    background: #C9A227;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .rbc-btn-group button:hover {
    background: #b8941f;
    transform: translateY(-1px);
  }

  .rbc-btn-group button.rbc-active {
    background: #a0851a;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .rbc-header {
    background: #C9A227;
    color: white;
    font-weight: 600;
    padding: 12px 8px;
    text-align: center;
    border: none;
  }

  .rbc-month-view {
    border: 1px solid #ddd;
    min-height: 500px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .rbc-month-row {
    min-height: 100px;
    display: flex;
    flex: 1;
  }

  .rbc-day-bg {
    border: 1px solid #e9ecef;
    min-height: 100px;
    position: relative;
    flex: 1;
  }

  .rbc-date-cell {
    padding: 8px;
    text-align: center;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rbc-today {
    background: rgba(201, 162, 39, 0.1);
  }

  .rbc-event {
    background: #C9A227;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    padding: 4px 8px;
    margin: 2px;
  }

  .rbc-event:hover {
    background: #b8941f;
  }

  .rbc-off-range-bg {
    background: rgba(248, 249, 250, 0.21);
  }

  .rbc-off-range {
    color: #999;
  }

  .rbc-day-bg:hover {
    background: rgba(201, 162, 39, 0.05);
  }

  .rbc-month-row + .rbc-month-row {
    border-top: 1px solid #e9ecef;
  }

  .rbc-day-bg + .rbc-day-bg {
    border-left: 1px solid #e9ecef;
  }

  .rbc-date-cell.rbc-off-range {
    opacity: 0.6;
  }

  .rbc-date-cell.rbc-off-range.rbc-off-range-bg {
    background: rgba(248, 249, 250, 0.1);
  }

  /* Garantir que todas as semanas sejam exibidas */
  .rbc-month-view .rbc-month-row:last-child {
    flex: 1;
  }

  /* Forçar altura mínima para cada linha */
  .rbc-month-view .rbc-month-row {
    flex: 1;
    min-height: 0;
  }
`;

export default AdvertisingPage;