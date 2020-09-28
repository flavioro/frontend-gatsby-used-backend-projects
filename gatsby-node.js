const axios = require('axios');

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

const getProjectsData = async () => {
    console.log(process.env.API_URL);
    return axios.get(`${process.env.API_URL}/projetos`);
};

exports.createPages = async ({actions: {createPage}}) => {
    let projects = await getProjectsData();
    projects = projects.data;

    // Create a page that lists all projects.
    createPage({
        path: `/`,
        component: require.resolve('./src/templates/all-projects.js'),
        context: {projects}
    });

    // Create a page for each project.
    projects.forEach(project => {
        createPage({
            path: `/project/${project.id}`,
            component: require.resolve('./src/templates/project.js'),
            context: {project}
        });
    });
};
