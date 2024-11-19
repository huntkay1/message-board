const date = new Date().toLocaleString('en-US')

const messages = [
    {
        id: 1,
        text: "Hi there!",
        user: "Amando",
        added: date
    },
    {
        id: 2,
        text: "Hello World!",
        user: "Charles",
        added: date
    }
];

async function getMessageById(messageId) {
    return messages.find(msg => msg.id === messageId);
}

function addNewMessage(message) {
    const newId = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;
    messages.push({ id: newId, text: message.message, user: message.userName, added: date });
}

module.exports = { getMessageById, messages, addNewMessage }
