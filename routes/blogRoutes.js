
const express = require('express');
const cors = require('cors');
const { ObjectId ,MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;
const mongoURI = 'mongodb+srv://admin:12344321@blog.sjd6eaj.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  next();
});


client.connect()
  .then(() => {
    const db = client.db('blog');
    const recipesCollection = db.collection('recipes');
    const blogsCollection = db.collection('blogs');
    const techCollection = db.collection('tech');
    const travelCollection = db.collection('travel');
    const lifestyleCollection = db.collection('lifestyle');



//BLOGS INDIVIDUAL DISPLAY

    app.get('/blogs/:blogId', (req, res) => {
        const blogId = req.params.blogId;
        blogsCollection.findOne({ _id: new ObjectId(blogId) })
          .then(blog => {
            if (blog) {
              res.json(blog);
            } else {
              res.status(404).json({ error: 'Blog not found' });
            }
          })
          .catch(error => {
            console.error('Error fetching blog:', error);
            res.status(500).json({ error: 'Internal server error' });
          });
      });


      app.delete('/blogs/:blogId', (req, res) => {
        const blogId = req.params.blogId;
        blogsCollection.deleteOne({ _id: new ObjectId(blogId) })
          .then(result => {
            if (result.deletedCount > 0) {
              res.json({ message: 'Blog deleted successfully' });
            } else {
              res.status(404).json({ error: 'Blog not found' });
            }
          })
          .catch(error => {
            console.error('Error deleting blog:', error);
            res.status(500).json({ error: 'Internal server error' });
          });
      });
      
      
//Recipes individual display


app.get('/recipes/:recipeId', (req, res) => {
    const recipeId = req.params.recipeId;
    recipesCollection.findOne({ _id: new ObjectId(recipeId) })
      .then(recipe => {
        if (recipe) {
          res.json(recipe);
        } else {
          res.status(404).json({ error: 'Recipe not found' }); // Update message to 'Recipe not found'
        }
      })
      .catch(error => {
        console.error('Error fetching recipe:', error); // Update error message to 'Error fetching recipe'
        res.status(500).json({ error: 'Internal server error' });
      });
});

app.delete('/recipes/:recipeId', (req, res) => {
    const recipeId = req.params.recipeId;
    recipesCollection.deleteOne({ _id: new ObjectId(recipeId) })
      .then(result => {
        if (result.deletedCount > 0) {
          res.json({ message: 'Recipe deleted successfully' }); // Update message to 'Recipe deleted successfully'
        } else {
          res.status(404).json({ error: 'Recipe not found' }); // Update message to 'Recipe not found'
        }
      })
      .catch(error => {
        console.error('Error deleting recipe:', error); // Update error message to 'Error deleting recipe'
        res.status(500).json({ error: 'Internal server error' });
      });
});

///end
//Tech individual display

app.get('/tech/:techId', (req, res) => {
    const techId = req.params.techId;
    techCollection.findOne({ _id: new ObjectId(techId) })
      .then(tech => {
        if (tech) {
          res.json(tech);
        } else {
          res.status(404).json({ error: 'tech not found' }); // Update message to 'tech not found'
        }
      })
      .catch(error => {
        console.error('Error fetching tech:', error); // Update error message to 'Error fetching tech'
        res.status(500).json({ error: 'Internal server error' });
      });
});

app.delete('/tech/:techId', (req, res) => {
    const techId = req.params.techId;
    techCollection.deleteOne({ _id: new ObjectId(techId) })
      .then(result => {
        if (result.deletedCount > 0) {
          res.json({ message: 'tech deleted successfully' }); // Update message to 'tech deleted successfully'
        } else {
          res.status(404).json({ error: 'tech not found' }); // Update message to 'tech not found'
        }
      })
      .catch(error => {
        console.error('Error deleting tech:', error); // Update error message to 'Error deleting tech'
        res.status(500).json({ error: 'Internal server error' });
      });
});

//end





//Travel individual display

app.get('/travel/:travelId', (req, res) => {
    const travelId = req.params.travelId;
    travelCollection.findOne({ _id: new ObjectId(travelId) })
      .then(travel => {
        if (travel) {
          res.json(travel);
        } else {
          res.status(404).json({ error: 'travel not found' }); // Update message to 'travel not found'
        }
      })
      .catch(error => {
        console.error('Error fetching travel:', error); // Update error message to 'Error fetching travel'
        res.status(500).json({ error: 'Internal server error' });
      });
});

app.delete('/travel/:travelId', (req, res) => {
    const travelId = req.params.travelId;
    travelCollection.deleteOne({ _id: new ObjectId(travelId) })
      .then(result => {
        if (result.deletedCount > 0) {
          res.json({ message: 'travel deleted successfully' }); // Update message to 'travel deleted successfully'
        } else {
          res.status(404).json({ error: 'travel not found' }); // Update message to 'travel not found'
        }
      })
      .catch(error => {
        console.error('Error deleting travel:', error); // Update error message to 'Error deleting travel'
        res.status(500).json({ error: 'Internal server error' });
      });
});





//end




//Travel individual display

app.get('/lifestyle/:lifestyleId', (req, res) => {
    const lifestyleId = req.params.lifestyleId;
    lifestyleCollection.findOne({ _id: new ObjectId(lifestyleId) })
      .then(lifestyle => {
        if (lifestyle) {
          res.json(lifestyle);
        } else {
          res.status(404).json({ error: 'lifestyle not found' }); // Update message to 'lifestyle not found'
        }
      })
      .catch(error => {
        console.error('Error fetching lifestyle:', error); // Update error message to 'Error fetching lifestyle'
        res.status(500).json({ error: 'Internal server error' });
      });
});

app.delete('/lifestyle/:lifestyleId', (req, res) => {
    const lifestyleId = req.params.lifestyleId;
    lifestyleCollection.deleteOne({ _id: new ObjectId(lifestyleId) })
      .then(result => {
        if (result.deletedCount > 0) {
          res.json({ message: 'lifestyle deleted successfully' }); // Update message to 'lifestyle deleted successfully'
        } else {
          res.status(404).json({ error: 'lifestyle not found' }); // Update message to 'lifestyle not found'
        }
      })
      .catch(error => {
        console.error('Error deleting lifestyle:', error); // Update error message to 'Error deleting lifestyle'
        res.status(500).json({ error: 'Internal server error' });
      });
});





//end








    app.post('/recipes', express.json(), (req, res) => {
        const newRecipe = req.body;
        recipesCollection.insertOne(newRecipe)
          .then(result => {
            res.status(201).json(result.ops[0]);
          })
          .catch(error => {
            res.status(500).json({ error: 'Internal server error' });
          });
      });

      app.post('/blogs', express.json(), (req, res) => {
        const newBlog = req.body;
        blogsCollection.insertOne(newBlog)
          .then(result => {
            res.status(201).json(result.ops[0]);
          })
          .catch(error => {
            res.status(500).json({ error: 'Internal server error' });
          });
      });
      
      app.post('/tech', express.json(), (req, res) => {
        const technology = req.body;
        techCollection.insertOne(technology)
          .then(result => {
            res.status(201).json(result.ops[0]);
          })
          .catch(error => {
            res.status(500).json({ error: 'Internal server error' });
          });
      });

      app.post('/travel', express.json(), (req, res) => {
        const travel = req.body;
        travelCollection.insertOne(travel)
          .then(result => {
            res.status(201).json(result.ops[0]);
          })
          .catch(error => {
            res.status(500).json({ error: 'Internal server error' });
          });
      });

      app.post('/lifestyle', express.json(), (req, res) => {
        const lifestyle = req.body;
        lifestyleCollection.insertOne(lifestyle)
          .then(result => {
            res.status(201).json(result.ops[0]);
          })
          .catch(error => {
            res.status(500).json({ error: 'Internal server error' });
          });
      });



    app.get('/recipes', (req, res) => {
        recipesCollection.find({}).toArray()
          .then(recipes => res.json(recipes))
          .catch(error => {
            console.error('Error fetching recipes data:', error);
            res.status(500).json({ error: 'Internal server error' });
          });
      });

    app.get('/blogs', (req, res) => {
      blogsCollection.find({}).toArray()
        .then(blogs => res.json(blogs))
        .catch(error => res.status(500).json({ error: 'Internal server error' }));
    });

    app.get('/tech', (req, res) => {
      techCollection.find({}).toArray()
        .then(tech => res.json(tech))
        .catch(error => res.status(500).json({ error: 'Internal server error' }));
    });

    app.get('/travel', (req, res) => {
      travelCollection.find({}).toArray()
        .then(travel => res.json(travel))
        .catch(error => res.status(500).json({ error: 'Internal server error' }));
    });

    app.get('/lifestyle', (req, res) => {
      lifestyleCollection.find({}).toArray()
        .then(lifestyle => res.json(lifestyle))
        .catch(error => {
          console.error('Error fetching lifestyle data:', error);
          res.status(500).json({ error: 'Internal server error' });
        });
    });
    













    // Default route handler
    app.get('/', (req, res) => {
      res.json('HELLO');
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
