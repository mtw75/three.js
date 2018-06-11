/**
 * @author miheikki / miikka.heikkinen@theqtcompany.com
 */

import { Texture } from '../textures/Texture.js';

function  QtQuickItemTexture( quickItem, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {
	
    Texture.call( this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy );

    this.generateMipmaps = false;
    this.version++;

    this.quickItem = quickItem;

};

QtQuickItemTexture.prototype = Object.create( Texture.prototype );
QtQuickItemTexture.prototype.constructor = QtQuickItemTexture;

export { QtQuickItemTexture };
