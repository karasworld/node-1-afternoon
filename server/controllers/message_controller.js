let messages = [];
let id = 0;

const create = (req, res, next)=>{
    const {text, time}=req.body;
    messages.push({id, text, time});
    id++;
    res.json(messages);
};

const read = (req, res, next)=>{
    return res.json(messages)
};

const update = (req, res, next)=>{
    const {text} = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message=>message.id == updateID);
    let message = messages[messageIndex];
    messages[messageIndex]={
        id: message.id,
        text: text||message.text,
        time: message.time
    };
    res.json(messages);
};

const destroy = (req, res, next)=>{
    const deleteID = req.params.id;
    messageIndex = messages.findIndex(message=>message.id==deleteID);
    messages.splice(messageIndex, 1);
    res.json(messages);
};



module.exports={
    create,
    read,
    update,
    destroy
}