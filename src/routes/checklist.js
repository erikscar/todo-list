const express = require('express')
const router = express.Router()

const Checklist = require('../models/checklist')

router.get('/', async(req, res) => {
   try {
    let checklists = await Checklist.find({})
    res.status(200).render('checklists/index', {checklists: checklists})
    //renderizando na respota a pagina criada na view, e passando para a view a variavel checklists
   } catch (error) {
    res.status(500).render('pages/error', { error: "Erro Durante a Exibição das Listas"})
   }
})

router.get("/new", async(req, res) => {
    try {
        let checklist = new Checklist() //CRIANDO UM OBJETO VAZIO, COM ATRIBUTOS VAZIOS
        res.status(200).render('checklists/new', { checklist: checklist})
    } catch (error) {
        res.status(500).render('pages/error', { errors: "Erro ao Carregar o Formulário"})
    }
})

router.get('/:id/edit', async(req, res) => {
    try {
    } catch (error) {
        
    }
})

router.post('/', async (req, res) => {
    let {name} = req.body.checklist
    let checklist = new Checklist({ name })

    try {
        await checklist.save()
        res.redirect('/checklists')
    } catch (error) {
        res.status(422).render('checklists/new', { checklists: {...checklist, error}})
        //Se der errado vai voltar para oa pagina new, e devolver todos os checklist com rest params e o erro 
    }
})

router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/show', {checklist: checklist})
        res.status(200).json(checklist)

    } catch (error) {
        res.status(422).render("pages/error", {error: "Erro ao Exibir a Lista de Tarefas"})
    }
})

router.put('/:id', async(req, res) => {
    let { name } = req.body

    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name},  {new: true})
        res.status(200).json(checklist)

    } catch (error) {
        res.status(422).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findByIdAndDelete(req.params.id)
        res.status(200).json(checklist)

    } catch (error) {
        res.status(422).json(error)
    }
})

module.exports = router