import foodCartSample from './Food-cart-0.json';
import accordusermanual from './How to Use Accord Editor.-0.json';

const projects = {
    accordusermanual,
    foodCartSample
}

export const personalProjectIds = Object.keys(projects).map(name => projects[name].id);

export default projects;