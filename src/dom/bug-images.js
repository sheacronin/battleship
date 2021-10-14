import ladybug_0 from '../img/ladybug_0.png';
import ladybug_1 from '../img/ladybug_1.png';

import ant_0 from '../img/ant_0.png';
import ant_1 from '../img/ant_1.png';
import ant_2 from '../img/ant_2.png';

import spider_1 from '../img/spider_1.png';
import spider_0 from '../img/spider_0.png';
import spider_2 from '../img/spider_2.png';

import caterpillar_0 from '../img/caterpillar_0.png';
import caterpillar_1 from '../img/caterpillar_1.png';
import caterpillar_2 from '../img/caterpillar_2.png';
import caterpillar_3 from '../img/caterpillar_3.png';

import worm_0 from '../img/worm_0.png';
import worm_1 from '../img/worm_1.png';
import worm_2 from '../img/worm_2.png';
import worm_3 from '../img/worm_3.png';
import worm_4 from '../img/worm_4.png';

const bugImages = {
    ladybug: [ladybug_0, ladybug_1],
    ant: [ant_0, ant_1, ant_2],
    spider: [spider_0, spider_1, spider_2],
    caterpillar: [caterpillar_0, caterpillar_1, caterpillar_2, caterpillar_3],
    worm: [worm_0, worm_1, worm_2, worm_3, worm_4],
};

function styleUnitWithBugImageWithRotation(unitEl, bug, index) {
    if (checkIfBugIsVertical(bug.direction)) {
        unitEl.style.transform = 'rotate(90deg)';
    } else {
        unitEl.style.transform = 'rotate(0deg)';
    }
    unitEl.style.backgroundImage = getBugImageURL(bug.name, index);
}

function styleUnitWithBugImageWithoutRotation(unitEl, bug, index) {
    unitEl.style.backgroundImage = getBugImageURL(bug.name, index);
}

function getBugImageURL(bugName, index) {
    return `url(${getBugImage(bugName, index)})`;
}

function getBugImage(bugName, index) {
    bugName = bugName.toLowerCase();
    return bugImages[bugName][index];
}

function checkIfBugIsVertical(bugDirection) {
    return bugDirection === 'vertical' ? true : false;
}

export {
    styleUnitWithBugImageWithRotation,
    styleUnitWithBugImageWithoutRotation,
};
