export type Testimonial = {
  id: string;
  quote: string;
  // Placeholder attribution only — DO NOT invent real client names or figures.
  // Swap in real, permissioned client quotes when available. [TESTIMONIALS]
  attribution: string;
  context: string;
  placeholder: boolean;
};

// All entries below are clearly-labeled PLACEHOLDERS (placeholder: true).
// They exist to show the layout and are visibly marked in the UI. Replace with
// genuine, permissioned testimonials — never fabricate named clients or numbers.
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Placeholder testimonial — replace with a genuine client quote. Structured to read as quiet praise for attentive, discreet representation.',
    attribution: '[Client Name]',
    context: '[Buyer · Palos Verdes Estates]',
    placeholder: true,
  },
  {
    id: 't2',
    quote:
      'Placeholder testimonial — replace with a genuine client quote describing a smooth, well-managed process from first showing to close.',
    attribution: '[Client Name]',
    context: '[Seller · Torrance]',
    placeholder: true,
  },
  {
    id: 't3',
    quote:
      'Placeholder testimonial — replace with a genuine client quote about local knowledge and responsiveness across the South Bay.',
    attribution: '[Client Name]',
    context: '[Buyer · Redondo Beach]',
    placeholder: true,
  },
];
