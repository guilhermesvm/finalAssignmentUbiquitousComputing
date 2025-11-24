const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashPassword } = require('../utils');

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, user, password } = req.body;
        if (!name || !email || !user || !password)
            return res.status(400).json({ error: 'Campos incompletos' });

        const hashed = await hashPassword(password);

        const created = await prisma.user.create({
            data: { name, email, user, password: hashed }
        });

        res.status(201).json({
            id: created.id,
            name: created.name,
            email: created.email,
            user: created.user
        });

    } catch (err) {
        if (err.code === 'P2002')
            return res.status(409).json({ error: 'Email ou user já existe' });

        res.status(500).json({ error: err.message });
    }
});


// 🔥 GET TODOS → password removido corretamente
router.get('/', async (req, res) => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            user: true
        }
    });

    res.json(users);
});


// 🔥 GET POR ID → password removido corretamente
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const user = await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            user: true
        }
    });

    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    res.json(user);
});


// PUT
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, user, password } = req.body;

    const data = { name, email, user };

    if (password) data.password = await hashPassword(password);

    try {
        const updated = await prisma.user.update({
            where: { id },
            data
        });

        res.json({
            id: updated.id,
            name: updated.name,
            email: updated.email,
            user: updated.user
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// DELETE
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await prisma.user.delete({ where: { id } });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
