const createEntity = (Entity, prepareBody = (a) => a) => (req, res) => {
    const body = prepareBody(req.body);
  
    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide a entity",
      });
    }
  
    const entity = new Entity(body);
  
    if (!entity) {
      return res.status(400).json({ success: false, error: err });
    }
  
    entity
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: entity._id,
          message: "Entity created!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error,
          message: "Entity not created!",
        });
      });
  };
  
  const updateEntity = (Entity, prepareBody = (a) => a) => (req, res) => {
    const body = prepareBody(req.body);
  
    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide a body to update",
      });
    }
  
    Entity.findOne({ _id: req.params.id }, (err, entity) => {
      if (err) {
        return res.status(404).json({
          err,
          message: "Entity not found!",
        });
      }
      entity.nombre = body.nombre;
      entity
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: entity._id,
            message: "Entity updated!",
          });
        })
        .catch((error) => {
          return res.status(404).json({
            error,
            message: "Entity not updated!",
          });
        });
    });
  };
  
  const deleteEntity = async (req, res, Entity) => {
    await Entity.findOneAndDelete({ _id: req.params.id }, (err, entity) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
  
      return res.status(200).json({ success: true, data: entity });
    }).catch((err) => console.log(err));
  };
  
  const getEntityById = async (req, res, Entity) => {
    await Entity.findOne({ _id: req.params.id }, (err, entity) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
  
      if (!entity) {
        return res
          .status(404)
          .json({ success: false, error: `Entity not found` });
      }
      return res.status(200).json({ success: true, data: entity });
    }).catch((err) => console.log(err));
  };
  
  const getEntities = async (req, res, Entity) => {
    await Entity.find({}, (err, entities) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
  
      return res.status(200).json({ success: true, data: entities });
    }).catch((err) => console.log(err));
  };
  
  module.exports = {
    createEntity,
    updateEntity,
    deleteEntity,
    getEntities,
    getEntityById,
  };
  