
const Fondue = require("../models/Fondue");


async function index(req, res) {
    let fondues = await Fondue.find({})
    res.send(fondues)
}



async function create(req, res) {
    let  {...data}  = req.body

    await Fondue.create({...data})

    res.send('Good')
}


async function show(req, res) {
    const fondue = await Fondue.findById(req.params.id)
    res.send(fondue)
}

async function remove(req, res) {

    const fondue = await Fondue.findByIdAndDelete(req.params.id);
    if (fondue) {
            res.send({ message: 'Fondue deleted successfully' });
        } else {
            res.status(404).send({ error: 'Fondue not found' });
        }

}

async function update(req, res) {

    const { ...data } = req.body;
    const fondue = await Fondue.findByIdAndUpdate(req.params.id, data, { new: true });
    if (fondue) {
        res.send(fondue);
    } else {
        res.status(404).send({ error: 'Fondue not found' });
    }

}


module.exports = {index, create, show, remove, update};