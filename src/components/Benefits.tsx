'use client';

const benefits = [
  {
    title: 'Recognition',
    description:
      'Congregational members feel accepted as practicing devotees and feel that they are making progress. They feel appreciated for their devotional efforts. This inspires them to advance more and more.',
  },
  {
    title: 'Gradual Progress',
    description:
      'The Bhakti-steps Program offers congregational devotees a step-by-step approach to sadhana–bhakti. It is easier to fix the mind on the next target (from one to four rounds, from four to eight, from being vegetarian to eating only prasada, and so on).',
  },
  {
    title: 'Not Based on Financial Contributions',
    description:
      'Sometimes people feel appreciated by the temple only when they give money. Those who cannot give financial contributions sometimes feel neglected. The Bhakti-steps Program is open to everyone, independently of monetary conditions.',
  },
  {
    title: 'Prevents Defections',
    description:
      'Through the Bhakti-steps Program the congregation develops a strong feeling of belonging to Srila Prabhupada\'s movement. Their affiliation with ISKCON is reaffirmed by their acceptance of ISKCON\'s Bhakti-steps Program.',
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-[#e8d7c3]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Benefits
        </h2>

        {/* Benefits List */}
        <div className="space-y-10">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
