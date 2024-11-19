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

module.exports = { getMessageById, messages }
