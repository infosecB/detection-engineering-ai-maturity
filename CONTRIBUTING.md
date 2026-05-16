# Contributing

This framework is maintained in public. Contributions are welcome, and necessary, because the field moves fast and no single author has the full picture.

## What contributions are most valuable

- **Sharpening level descriptors**. If a cell in the [matrix](src/content/docs/matrix.md) is vague, ambiguous, or wrong for how the field actually works, propose a revision.
- **Anti-patterns**. Each dimension page lists anti-patterns. If you've seen one that isn't listed, add it.
- **Missing dimensions or sub-dimensions**. Make a case in an issue first.
- **Mapping to other frameworks**. Cross-walks to NIST AI RMF, MITRE ATLAS, the underlying Detection Engineering maturity frameworks, etc.
- **Case studies**. Anonymized accounts of "we were at L1 in X and got to L2 by doing Y" are gold.

## What contributions are out of scope

- **Vendor or product endorsements**. This framework is vendor-neutral. PRs that name a specific product as the way to achieve a level will be asked to generalize.
- **Definitions that require a specific tool to make sense**. Maturity should be assessable independent of any one vendor.
- **Scoring methodologies that reduce the profile to a single number**. The framework is intentionally multi-dimensional.

## How to contribute

1. **Open an issue first** for anything beyond a typo. Describe the change and why.
2. **Fork and PR** for the change. Keep PRs focused.
3. **Match the voice**. Descriptors are short, direct, and concrete. Avoid hedging language like "consider," "may want to," and "best practices include." Say what's true at that level.
4. **Update both the matrix and the dimension page**. The full table in `src/content/docs/matrix.md` and the corresponding `src/content/docs/dimensions/*.md` page should agree verbatim. The `public/assets/matrix.csv` mirror should also be updated.
5. **Run `npm run build`** locally before submitting.

## Style notes

- **No hedging**. "At L2 the team has X," not "should have" or "may have."
- **No vendor names**. Refer to categories ("a sanctioned IDE-integrated AI surface") rather than products.
- **No emoji** in matrix cells or descriptors.
- **No em dashes**. Use periods, commas, parentheses, or colons.
- **Cite prior art** when a concept derives from another framework or paper.

## Governance

The project currently follows a benevolent-maintainer model. If the project grows, a small steering group will be formed to review substantive structural changes (adding or removing dimensions, changing the number of levels).

## License

Contributions are released under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), the same license as the framework.
