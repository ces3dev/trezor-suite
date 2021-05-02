import React from 'react';
import { Translation } from '@suite-components';
import { OnboardingStepBox } from '@suite/components/firmware';
import { OnboardingButtonCta, OnboardingButtonSkip } from '@onboarding-components';
import { useOnboarding } from '@suite-hooks';

const SecurityStep = () => {
    const { goToNextStep, goToStep } = useOnboarding();

    return (
        <OnboardingStepBox
            image="FOLDER"
            heading={<Translation id="TR_SECURITY_HEADING" />}
            description={<Translation id="TR_SECURITY_SUBHEADING" />}
            innerActions={
                <OnboardingButtonCta
                    data-test="@onboarding/create-backup-button"
                    onClick={() => {
                        goToNextStep();
                    }}
                >
                    <Translation id="TR_GO_TO_SECURITY" />
                </OnboardingButtonCta>
            }
            outerActions={
                <OnboardingButtonSkip
                    data-test="@onboarding/skip-backup"
                    onClick={() => goToStep('set-pin')}
                >
                    <Translation id="TR_SKIP_BACKUP" />
                </OnboardingButtonSkip>
            }
        />
    );
};

export default SecurityStep;
