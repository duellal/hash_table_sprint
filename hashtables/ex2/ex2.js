class Ticket {
    constructor(source, destination){
        this.source = source;
        this.destination = destination
    }
}

const reconstruct_trip = (tickets, length) => {
    // console.log(`Tickets:`, tickets)

    let hash_tickets = {}
    let route = []
    let xTickets = {}
    
    tickets.forEach(ticket => {
        hash_tickets[ticket.source] = ticket.destination
    })

    console.log(`Hash Table:`, hash_tickets)

    // for(let source in hash_tickets){
    //     let destination = hash_tickets[source]

    //     if(route.length === 0){
    //         route.push(source, destination)
    //     }
    //     else if(source === `NONE`){
    //         route.unshift(destination)
    //     }
    //     else if(destination === `NONE` && hash_tickets[hash_tickets.length-1] === source){
    //         route.push(destination)
    //     }
    //     else if(route[0] === destination){
    //         route.unshift(source)
    //     }
    //     else if(route[route.length-1] === source){
    //         route.push(destination)
    //     }
    //     else{
    //         xTickets[source] = destination
    //     }
        // if(xTickets.length !== 0){
        //     console.log(`HERE`)
        //     // for(let xSource in xTickets){
        //     //     let xDest = xTickets[xSource]
        
        //     //     if(xSource === `NONE`){
        //     //         route.unshift(xDest)
        //     //     }
        //     //     else if(xDest === `NONE`){
        //     //         route.push(xSource, xDest)
        //     //     }
        //     //     // else if(route[route.length-1] === `NONE` && route[0] !== xDest){
        //     //     //     route.unshift(xSource, xDest)
        //     //     // } 
        //     //     else if(route[0] === xDest){
        //     //         route.unshift(xSource)
        //     //     }
        //     //     else if(route[route.length-1] === xSource && xSource !== `NONE`){
        //     //         route.push(xDest)
        //     //     }
        //     // }
        // }
    // }
    // console.log(`xtra Tickets:`, xTickets)


    console.log(`Route:`, route)
    return route
}

module.exports = {
    Ticket, reconstruct_trip
}