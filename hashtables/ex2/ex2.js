class Ticket {
    constructor(source, destination){
        this.source = source;
        this.destination = destination
    }
}

const reconstruct_trip = (tickets, length) => {
    let hash_tickets = {}
    let route = []

    tickets.forEach(ticket => {
        hash_tickets[ticket.source] = ticket.destination
    })

    for(let i = 0; i < length; i++){
        for(source in hash_tickets){
            dest = hash_tickets[source]
            let index = route.findIndex(item => {return item === source})

            if(index > -1){
                route.splice(index + 1, 0, dest)
                delete hash_tickets[source]
            }
            if(route.length === 0){
                route.push(source, dest)
                delete hash_tickets[source]
            }
            if(source === `NONE`){
                route.unshift(dest)
                delete hash_tickets[source]
            }
            if(dest === `NONE` && !route.includes(`NONE`)){
                route.push(dest)
            }
        }
    }

    route = [...new Set(route)]
    return route
}

module.exports = {
    Ticket, reconstruct_trip
}