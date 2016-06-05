import {create} from 'jss';
import reactJss from 'react-jss';
import defaultUnit from 'jss-default-unit';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';

export const jss = create();
export const useSheet = reactJss(jss);

jss.use(
	defaultUnit(),
	nested(),
	camelCase()
);