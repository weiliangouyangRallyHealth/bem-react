import React, { Component } from 'react';
import PropTypes from 'prop-types';

import naming from '@bem/sdk.naming.presets';
import Core from '../Core';

const { Bem, decl, declMod } = Core({
    preset : {
        Render : React.createElement.bind(React),
        Base : Component,
        classAttribute : 'className',
        PropTypes
    },
    naming : naming['react']
});

export default Bem;
export { decl, declMod };
