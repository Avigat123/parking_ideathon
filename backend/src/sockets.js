const { Server } = require('socket.io');
let io;


function initSockets(server) {
io = new Server(server, { cors: { origin: '*' } });


io.on('connection', (socket) => {
console.log('client connected', socket.id);
socket.on('joinLot', (lotId) => {
socket.join(`lot:${lotId}`);
});


socket.on('disconnect', () => console.log('disconnected', socket.id));
});
}


function broadcastSlotUpdate(slot) {
// slot should include lot_id
io.to(`lot:${slot.lot_id}`).emit('slotUpdate', slot);
}


module.exports = { initSockets, broadcastSlotUpdate };