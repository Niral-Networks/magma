/**
 * Copyright 2020 The Magma Authors.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @flow strict-local
 * @format
 */

import type {WithStyles} from '@material-ui/core';

import * as React from 'react';
import CardActions from '@material-ui/core/CardActions';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  cardRoot: {
    boxShadow: '0px -1px 4px 0px rgba(0, 0, 0, 0.11)',
    padding: '12px',
    display: 'flex',
  },
  placeholder: {
    flexGrow: 1,
  },
};

export type FooterAlign = 'left' | 'right';

type Props = {
  alignItems: FooterAlign,
  children: React.Node,
  className?: ?string,
} & WithStyles<typeof styles>;

const CardFooter = (props: Props) => {
  const {alignItems, children, classes, className} = props;
  return (
    <CardActions classes={{root: classNames(className, classes.cardRoot)}}>
      {alignItems === 'right' ? <div className={classes.placeholder} /> : null}
      {children}
    </CardActions>
  );
};

CardFooter.defaultProps = {
  alignItems: 'right',
};

export default withStyles(styles)(CardFooter);