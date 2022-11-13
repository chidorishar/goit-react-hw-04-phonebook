import styled from '@emotion/styled';
import { interactiveInput } from 'components/common/sharedStyles';
import { activeAccentedButton } from 'components/common/sharedStyles';

export const AddContactButton = styled.button`
  ${activeAccentedButton};

  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  width: ${p => p.theme.sizes.small};
  margin: 0;
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.big};
`;

export const AddContactForm = styled.form`
  padding: ${p => p.theme.space[3]}px;
  border-top: ${p => p.theme.borders.smallDashed};
`;

export const InputInfoLabel = styled.label`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};

  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;

  transition: color ${p => p.theme.transitions.normal};

  &:focus-within {
    color: ${p => p.theme.colors.accent};
  }
`;

export const ContactInput = styled.input`
  ${interactiveInput};

  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.medium};

  width: ${p => p.theme.sizes.small};
  margin: 0 auto;
  margin-top: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radii.normal};
`;
