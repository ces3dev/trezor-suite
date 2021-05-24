import React from 'react';
import { NeueOption, OptionsWrapper, OptionsDivider } from '@onboarding-components';
import { Translation } from '@suite-components';

interface Props {
    onSelect: (number: boolean) => void;
}

const SelectRecoveryType = ({ onSelect }: Props) => (
    <OptionsWrapper>
        <NeueOption
            onClick={() => {
                onSelect(false);
            }}
            icon="SEED_SINGLE"
            heading={<Translation id="TR_BASIC_RECOVERY" />}
            description={<Translation id="TR_BASIC_RECOVERY_OPTION" />}
            data-test="@recover/select-type/basic"
        />
        <OptionsDivider />
        <NeueOption
            onClick={() => {
                onSelect(true);
            }}
            icon="SEED_SHAMIR"
            heading={<Translation id="TR_ADVANCED_RECOVERY" />}
            description={<Translation id="TR_ADVANCED_RECOVERY_OPTION" />}
            data-test="@recover/select-type/advanced"
        />
    </OptionsWrapper>
);

export default SelectRecoveryType;
