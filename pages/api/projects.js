import data from './projects.json';

export const getProjects = () => {
    return data;
};

export default function (req, res) {
    const projects = getProjects();
    res.json(projects);
}
