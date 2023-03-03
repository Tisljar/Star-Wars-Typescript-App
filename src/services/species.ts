import { getSpeciesResource } from '../adapters/xhr/axios';
import { SPECIES } from '../helpers/constants/swapiEndpoints';
import { ISpecie } from '../helpers/interfaces/ISpecie';

export const getSpecies = async (...specieNames: Array<string>) => {
    let response: Array<ISpecie> = [];
    try {
        if (specieNames.length == 0) {
            const promise = await getSpeciesResource(SPECIES);
            response = response.concat(promise);
        } else {
            for (const name of specieNames) {
                const promise = await getSpeciesResource(`${SPECIES}?search=${name}`);
                response = response.concat(promise);
            }
        }
    } catch (error) {
        console.log(error);
    }
    console.log(response);
    return response;
};
