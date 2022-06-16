import { PureComponent } from "react";
import PropType from 'prop-types';

const PropName = {
    Color: 'color',
    Fill: 'fill'
};

const PropTypes = {
    [PropName.Color]: PropType.string,
    [PropName.Fill]: PropType.oneOf(['none', 'outline', 'solid'])
};

/**
 *
 * <UefButton>Button</UefButton>
 */
class UefButton extends PureComponent
{
    static UEF_BUTTON_COLOR = 'var(--uef-color-blue-primary)';

    render() {
        return (
            <uef-button {...this.props}>{
                this.props.children
            }</uef-button>
        );
    }
}

UefButton.propTypes = PropTypes;

UefButton.defaultProps = {
    [PropName.Color]: 'default',
    [PropName.Fill]: 'outline'
};

export default UefButton;
