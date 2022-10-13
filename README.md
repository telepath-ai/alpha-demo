## Telepath Alpha

**We'll start with the warnings:** 
* This is the epitome of an MVP project, and things will definitely break. When they do,
it's more than likely that you'll have no idea what went wrong, or worse, you'll be given a nondescript
error message that has nothing to do with the actual error (e.g. an HTTP gateway error message when the 
actual error happened on the backend). Just let me know when you get these, and I'll dig into the logs
to sort out the issue. Useful error messages are coming soon.
* This is an active alpha project, so breaking changes may occur between version updates.

**Limitations**
* We can only read data from internet-accessible databases. We can't read data from local files or localhost.
* The query builder can generate complex SQL queries, but they may not execute successfully (resulting in one 
of those unhelpful error messages mentioned above). This is currently the expected behavior, so it's best to 
keep the queries VERY simple for now.

**Spinning up a free internet-accessible database**
The fastest way (that I know of) to get your local files into a public database is to create a free
[bit.io](https://bit.io) account. Note: you need to use the "Sign Up" button and make a free account.
The demo/trial database that they spin up from the home screen is not internet-accessible.

Once you have an account, you can easily create a new Postgres database, and you can drag and drop CSV files
directly into the browser to create tables. It's pretty sweet. Then, click on the `Connect` tab to see the 
credentials that you can use to connect to Telepath.

### Creating a Demo Project

1. Login/signup at https://alpha.telepath.io
2. Click on the `Connections` tab and add your database credentials.
3. Wait 5-10 minutes... You can work on the next step, but you need to allow our server time to 
propagate your new database credentials before you try to deploy your project. Haha. Growing pains.
4. Open `index.ts` in your IDE and update the values of your Connection slug and your database table name.
5. Use the CLI to create the project resources. From the project root directory, run `npm run cli:deploy` 
(if it tells you to login, run `npm run cli:login` and try again). 
6. Once the resources are created, go back to https://alpha.telepath.io and click on the `Models` tab,
and then click on the `Model Specs` sub-tab. You should see the ModelSpec resource that you create. Click on it!
7. Click on the `Start Training Model` button.
8. Wahoo! Your model is training! The page should auto-refresh, but you can refresh if it seems like it's hanging.  
Keep in mind, the model will likely take 30 - 90 minutes to train.
9. Once the training is complete, you can find your model listed in the `Models` tab, including a very basic
API endpoint for making predictions with the model.

If all that worked, then you saved days/weeks of infrastructure and MLOps work! If it didn't, then at least your only
wasted about 30 minutes! Let me know as issues come up. We'll eventually get you an ROI on your time! Guaranteed!

