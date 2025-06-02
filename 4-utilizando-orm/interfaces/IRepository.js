class IRepository {
    create(data) {}

    findAll(include) {}

    findById(id, include) {}

    update(id, data) {}

    remove(id) {}
}

module.exports = IRepository;