import { css } from "atomico";

export const tokens = css`
  @tokens "./tokens.yaml" (prefix: atomico);
`;

export const tokensSection = [
  tokens,
  css`
    .section {
      width: 100%;
      margin: auto;
      max-width: var(--section-maxwidth);
    }
  `,
];
