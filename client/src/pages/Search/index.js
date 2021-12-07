import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { GET_BIIGIES, GET_KEYWORDS } from '../../utils/queries.js';
import { Link } from "react-router-dom";

const Search = () => {
    const { data: biiggiesData, error: biiggiesError } = useQuery(GET_BIIGIES);
    console.log(biiggiesData);

    const { data: keywordsData, error: keywordsError} = useQuery(GET_KEYWORDS);
    console.log(keywordsData);
}