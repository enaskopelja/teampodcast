const CONV = [
  {
    voice: 'Larry',
    text: 'In this article, researchers employed a 3D self-supervised convolutional neural network, MutCompute, to identify stabilizing mutations in enzymes. The algorithm was trained on 19,000 sequence-diverse protein structures from the Protein Data Bank. '
  },
  {
    voice: 'Susan',
    text: 'The researchers then used MutCompute to predict the structural fit of all 20 canonical amino acids at every position in both wild-type PETase and ThermoPETase. 159 single or multiple predicted mutations were generated in various PETase scaffolds. Variants exhibiting improved catalytic activity and thermostability were then characterized further. '
  },
  {
    voice: 'Larry',
    text: 'Overall, this was an interesting study that was able to successfully identify potential stabilizing mutations in enzymes. It was also interesting to note that the MutCompute algorithm was able to learn the local chemical microenvironments of amino acids. '
  },
  {
    voice: 'Susan',
    text: 'One potential limitation of this study is that it was based on sequence-diverse protein structures from the Protein Data Bank, which could be limiting in the scope of predictions. It would be interesting to see how the algorithm might perform on a larger and more diverse dataset. '
  },
  {
    voice: 'Larry',
    text: 'Looking ahead, it would be interesting to see how this approach could'
  },
  { voice: 'Larry', text: 'Moving onto our next topic!' },
  {
    voice: 'Larry',
    text: "Hi everyone, today we'll be talking about the article regarding the evolution of protein language models and the increasing size of these models."
  },
  {
    voice: 'Susan',
    text: 'Yes, the article is discussing the importance of up-scaling language models, and how this is a major research innovation barrier. The article also talks about the relation between bigger models and seemingly better performance.'
  },
  {
    voice: 'Larry',
    text: 'Right, the article does mention that bigger models are not necessarily better than smaller models of higher quality. Additionally, the article also mentions that there are other aspects, such as computational costs and task-agnostic model design, that should be taken into consideration in the up-scaling of language models. '
  },
  {
    voice: 'Susan',
    text: "That's true, and it's important to remember that the up-scaling of pre-training datasets is also conditional. We must be mindful of the different factors at play when up-scaling language models and use this information to make informed decisions. "
  },
  {
    voice: 'Larry',
    text: 'Exactly, the article is a great reminder of this and provides insight into the current state of up-scaling language models. Moving forward, it will be interesting to see how researchers continue to work on this issue and further refine the process.'
  },
  { voice: 'Larry', text: 'Moving onto our next topic!' },
  {
    voice: 'Larry',
    text: 'In this podcast, we are going to be discussing a recent article about inverse folding and fixed back-bone design. The article looks at the use of AlphaFold2 and UniRef50 to predict sequences from back-bone structures. '
  },
  {
    voice: 'Susan',
    text: 'The authors use an autoregressive encoder-decoder architecture to approach inverse folding as a sequence-to-sequence problem. To make use of the large number of sequences with unknown structures, they add them as additional training data and condition the model on predicted structures when the experimental structures are unknown. '
  },
  {
    voice: 'Larry',
    text: 'This technique is similar to back-translation in machine translation which has been found to effectively learn from extra target data, even when the predicted inputs are of low quality. The authors found that existing approaches have been limited by data, and that larger models and different model architectures can effectively learn from the additional data, leading to an improvement of nearly 10 percentage points in the recovery of sequences. '
  },
  {
    voice: 'Susan',
    text: 'The article evaluated models on fixed backbone design benchmarks, and assessed the generalization capabilities across a series of tasks. They also consider the use of the models for zero-shot prediction of mutational. Overall, this article is a great step forward in the field'
  },
  {
    voice: 'Larry',
    text: 'Machine learning approaches have shown promise in many application areas, including protein structure prediction, and drug discovery and design, and have been used to effectively represent biological data and rapidly explore design spaces. This choice provides an overview of the article, which is essential for introducing the conversation topic. It provides the context for the two people to discuss the main takeaways, strong and weak points, and future implications of the article.'
  }
]

const asd = async () => {
  const res = await fetch('https://text-to-speech-6rmz6mmrha-ez.a.run.app', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body: { conversation: CONV }} )
  })
  console.log(await res.text())
  return
}

asd()