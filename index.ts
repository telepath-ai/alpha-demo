import { ModelSpec, Pipeline, Source } from '@telepath/telepath';

/**
 * A `Source` resource defines the connection to your database.
 * It references a `Connection`, which can be created in the Telepath UI.
 * This separation allows the database connection credentials to be encrypted
 * separately from the resource files, and it makes it possible to update
 * the credentials without having to re-deploy the resources.
 */
const source = new Source('my-source', {
    sourceConnectionSlug: 'value' // <-- Replace the "value" with the slug of your Connection
});

/**
 * A `Pipeline` can be thought of as a query that reads data from
 * your database. Pipelines are compiled into SQL statements and are used
 * to read data from the database when you're ready to train your model.
 *
 * Using the query builder is going to require some documentation, but the
 * example below will generate a basic "SELECT * FROM table" query.
 */
export const pipeline = new Pipeline('demo-pipeline', {
    input: {
        query: {
            from: {
                sourceId: source.id,
                table: 'value' // <-- Replace the "value" with the name of the table in the database
            }
        }
    },
});

/**
 * A `ModelSpec` resource defines the model that Telepath will be training.
 * The ModelSpec is only a definition; it's not the model itself. Once a ModelSpec
 * resource has been created, you can use the Telepath UI to train a new model.
 * The model training process will use the Pipeline to read the most recent data
 * from the database, and it will generate a new Model and Prediction API.
 */
new ModelSpec('demo-model', {
    pipelineId: pipeline.id,    // The model will read data from this Pipeline
    targetColumn: 'column',     // <-- Replace "column" with the name of the column that the model should be trained to predict
});
