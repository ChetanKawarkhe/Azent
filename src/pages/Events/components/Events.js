function Events({pageEvents}) {
  // console.log("==========================================");
  // console.log(pageEvents);
  // console.log(data)
  const eventElements = []
  for (const key in pageEvents) {
    eventElements.push(
    
      <div class="card">
      <div class="img">
        <img src={"/static/event-cover/" + pageEvents[key].cardCoverFile } alt=""/>
      </div>
      <div class="info">
        <h4 class="event-heading">{ pageEvents[key].cardTitle}</h4>
        <p class="date">{ pageEvents[key].cardSubTitle}</p>
        <p class="venue-time">{ pageEvents[key].eventDate}</p>
        <p class="venue-time">{ pageEvents[key].eventTime}</p>
        <span class="btn" href="#">Register Now</span>
      </div>
    </div>  
    )
  }
  return (
    <div class="card-container">
      {eventElements}
    </div>
  );
}

export default Events;
