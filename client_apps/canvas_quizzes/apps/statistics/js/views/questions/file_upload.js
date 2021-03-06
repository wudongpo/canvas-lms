/** @jsx React.DOM */
/*
 * Copyright (C) 2014 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

define(function(require) {
  var React = require('../../ext/react');
  var Essay = require('jsx!./essay');
  var I18n = require('i18n!quiz_statistics').default;

  var FileUpload = React.createClass({
    render: Essay.type.prototype.render,
    renderLinkButton: function() {
      return (
        <a className="btn" href={this.props.quizSubmissionsZipUrl} target="_blank" style={{marginBottom: "20px", maxWidth: "50%"}}>
          {I18n.t('download_submissions', 'Download All Files')}
        </a>
      );
    }
  });

  return FileUpload;
});
