window.QUESTIONS = [
  {
    "id": "1-1-1",
    "chapter": 1,
    "quiz": 1,
    "number": 1,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "Training minimizes F(θ)=(1/n)Σᵢℓ(yᵢ,fθ(xᵢ)). What does this optimization problem search over?",
      "options": [
        "The training samples (xᵢ, yᵢ)",
        "The parameters θ of the network",
        "The loss function ℓ",
        "The number of samples n"
      ],
      "explanation": "The data and loss are given. Training searches over the network parameters θ to minimize empirical loss."
    },
    "answer": 1,
    "zh": {
      "stem": "监督学习训练最小化 F(θ)=(1/n)Σᵢℓ(yᵢ,fθ(xᵢ))。该优化问题搜索什么？",
      "options": [
        "训练样本 (xᵢ,yᵢ)",
        "网络参数 θ",
        "损失函数 ℓ",
        "样本数量 n"
      ],
      "explanation": "数据与损失函数已给定。训练通过调整网络参数 θ，使经验损失尽量小，因此选 B。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "1-1-2",
    "chapter": 1,
    "quiz": 1,
    "number": 2,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "Which of the following describes the inference stage of supervised learning?",
      "options": [
        "Tuning θ so that fθ matches training labels",
        "Computing the gradient of empirical loss",
        "Using the learned function to label new, unseen data",
        "Splitting the data into training and test sets"
      ],
      "explanation": "Inference uses a trained model on unseen inputs; adjusting θ belongs to training."
    },
    "answer": 2,
    "zh": {
      "stem": "以下哪项描述了监督学习的推理阶段？",
      "options": [
        "调整 θ 以匹配训练图像标签",
        "计算经验损失的梯度",
        "用学得的函数为未见过的新数据预测标签",
        "划分训练集与测试集"
      ],
      "explanation": "推理使用训练好的模型处理新数据；调整参数和计算梯度属于训练。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "1-1-3",
    "chapter": 1,
    "quiz": 1,
    "number": 3,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "A binary classifier outputs logits a = [0, 0]. Its softmax output is:",
      "options": [
        "[0, 1]",
        "[1, 0]",
        "[0.5, 0.5]",
        "[0, 0]"
      ],
      "explanation": "Each probability is exp(0)/(exp(0)+exp(0))=1/2."
    },
    "answer": 2,
    "zh": {
      "stem": "二分类器输出 logits a=[0,0]，softmax 的结果是？",
      "options": [
        "[0,1]",
        "[1,0]",
        "[0.5,0.5]",
        "[0,0]"
      ],
      "explanation": "softmax 的每一项为 exp(0)/(exp(0)+exp(0))=1/2。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "1-1-4",
    "chapter": 1,
    "quiz": 1,
    "number": 4,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "Which is NOT a design property of the logistic loss log(1+exp(−yŷ))?",
      "options": [
        "It is smooth (differentiable)",
        "It is convex",
        "It penalizes wrong answers",
        "It equals the 0/1 misclassification error"
      ],
      "explanation": "Logistic loss is a smooth, convex surrogate that penalizes wrong predictions. It is not equal to the discrete 0/1 error."
    },
    "answer": 3,
    "zh": {
      "stem": "logistic 损失 log(1+exp(−yŷ)) 的设计性质不包括哪项？",
      "options": [
        "光滑且可微",
        "凸",
        "惩罚错误预测",
        "等于 0/1 分类错误"
      ],
      "explanation": "logistic 损失是光滑凸的替代损失，并不等于离散的 0/1 错误。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "1-1-5",
    "chapter": 1,
    "quiz": 1,
    "number": 5,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "Why do we minimize a surrogate loss instead of the 0/1 classification error directly?",
      "options": [
        "The 0/1 error is the goal but is not differentiable, and gradient descent needs smoothness",
        "The 0/1 error is too expensive to store in memory",
        "The surrogate loss always equals the 0/1 error",
        "The 0/1 error cannot be computed on training data"
      ],
      "explanation": "Error = 0/1 misclassification rate — the goal, but not differentiable; loss = smooth surrogate we actually minimize. [Slide 14]"
    },
    "answer": 0,
    "zh": {
      "stem": "为什么使用替代损失，而不直接最小化 0/1 分类错误？",
      "options": [
        "0/1 错误不可微，不适合直接做梯度下降",
        "0/1 错误占用过多存储",
        "替代损失始终等于 0/1 错误",
        "训练数据上无法计算 0/1 错误"
      ],
      "explanation": "0/1 错误在大部分区域梯度为零，在边界不连续，不能提供有用的梯度。可微替代损失方便优化。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "1-1-6",
    "chapter": 1,
    "quiz": 1,
    "number": 6,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "Which statement about f(n)=n³+n+2 is correct?",
      "options": [
        "f(n)=O(n²)",
        "f(n)=Θ(n³)",
        "f(n)=o(n³)",
        "f(n)=Ω(n⁴)"
      ],
      "explanation": "The cubic term dominates: f(n)/n³ tends to 1, so f(n)=Θ(n³)."
    },
    "answer": 1,
    "zh": {
      "stem": "关于 f(n)=n³+n+2，哪项正确？",
      "options": [
        "f(n)=O(n²)",
        "f(n)=Θ(n³)",
        "f(n)=o(n³)",
        "f(n)=Ω(n⁴)"
      ],
      "explanation": "最高次项 n³ 主导增长，f(n)/n³→1，故为 Θ(n³)。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "1-1-7",
    "chapter": 1,
    "quiz": 1,
    "number": 7,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "The gradient ∇f(x) points in which direction?",
      "options": [
        "the direction of the greatest rate of increase of f",
        "the direction of the greatest rate of decrease of f",
        "a direction along which f is constant",
        "the direction of the global minimum"
      ],
      "explanation": "Gradient points in the direction of the greatest rate of increase; its magnitude is the slope in that direction. [Slide 16]"
    },
    "answer": 0,
    "zh": {
      "stem": "梯度 ∇f(x) 指向哪个方向？",
      "options": [
        "函数值上升最快的方向",
        "函数值下降最快的方向",
        "函数值不变的方向",
        "全局最小值所在方向"
      ],
      "explanation": "单位方向上的方向导数是梯度与该方向的内积。同向时最大；负梯度对应局部最速下降。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "1-1-8",
    "chapter": 1,
    "quiz": 1,
    "number": 8,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "For twice-differentiable f:ℝⁿ→ℝ, what is the Hessian ∇²f(x)?",
      "options": [
        "a column vector in Rⁿ",
        "a scalar",
        "a univariate function",
        "an n × n matrix of second-order partial derivatives"
      ],
      "explanation": "The Hessian is an n×n matrix with entries ∂²f/(∂xᵢ∂xⱼ)."
    },
    "answer": 3,
    "zh": {
      "stem": "二阶可微函数 f:ℝⁿ→ℝ 的 Hessian ∇²f(x) 是？",
      "options": [
        "ℝⁿ 中的列向量",
        "标量",
        "一元函数",
        "由二阶偏导数组成的 n×n 矩阵"
      ],
      "explanation": "Hessian 的第 (i,j) 项为 ∂²f/(∂xᵢ∂xⱼ)。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "1-1-9",
    "chapter": 1,
    "quiz": 1,
    "number": 9,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "A 3-class classifier predicts the uniform distribution p = (1/3, 1/3, 1/3) on every sample. Using natural log, its cross-entropy loss per sample is:",
      "options": [
        "1/3",
        "ln 3 ≈ 1.10",
        "0",
        "3"
      ],
      "explanation": "Cross-entropy is −ln(p_true)=−ln(1/3)=ln 3≈1.10."
    },
    "answer": 1,
    "zh": {
      "stem": "三分类器总预测均匀分布 (1/3,1/3,1/3)。用自然对数时，每个样本的交叉熵为？",
      "options": [
        "1/3",
        "ln 3≈1.10",
        "0",
        "3"
      ],
      "explanation": "真实类别的预测概率为 1/3，因此交叉熵为 −ln(1/3)=ln 3。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "1-1-10",
    "chapter": 1,
    "quiz": 1,
    "number": 10,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "Which conditions are necessary for a local minimum x* of a twice-differentiable unconstrained function?",
      "options": [
        "∇f(x*)=0 and ∇²f(x*)≻0",
        "∇f(x*)=0 and ∇²f(x*)≽0",
        "Only ∇²f(x*)=0, with no gradient condition",
        "∇f(x*)=0 and ∇²f(x*)≺0"
      ],
      "explanation": "A local minimum has zero gradient and a positive-semidefinite Hessian. Positive definiteness is sufficient but not necessary."
    },
    "answer": 1,
    "zh": {
      "stem": "光滑函数在 x* 取得局部最小值的必要条件是？",
      "options": [
        "∇f(x*)=0 且 ∇²f(x*)≻0",
        "∇f(x*)=0 且 ∇²f(x*)≽0",
        "仅 ∇²f(x*)=0，无梯度要求",
        "∇f(x*)=0 且 ∇²f(x*)≺0"
      ],
      "explanation": "在无约束、二阶可微条件下，局部极小点梯度为零且 Hessian 半正定。正定是更强的充分条件。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "1-1-11",
    "chapter": 1,
    "quiz": 1,
    "number": 11,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "Which conditions are sufficient for a strict local minimum x*?",
      "options": [
        "∇f(x*)=0 and ∇²f(x*)≻0",
        "∇f(x*)=0 and ∇²f(x*)≽0",
        "∇²f(x*)≻0 alone",
        "‖∇f(x*)‖≤ε for a small ε"
      ],
      "explanation": "A stationary point with positive-definite Hessian is a strict local minimum. Semidefiniteness alone is insufficient."
    },
    "answer": 0,
    "zh": {
      "stem": "哪组条件足以保证 x* 是严格局部最小点？",
      "options": [
        "∇f(x*)=0 且 ∇²f(x*)≻0",
        "∇f(x*)=0 且 ∇²f(x*)≽0",
        "仅 ∇²f(x*)≻0",
        "梯度范数小于某个很小的 ε"
      ],
      "explanation": "驻点处 Hessian 正定意味着附近各非零方向上函数都上升；仅半正定不足以保证极小。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "1-1-12",
    "chapter": 1,
    "quiz": 1,
    "number": 12,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "Gradient descent minimizes f by updating the iterate as:",
      "options": [
        "w←w+α∇f(w)",
        "w←−α∇f(w)",
        "w←w−α∇f(w)",
        "w←w−α²∇f(w)"
      ],
      "explanation": "Gradient descent subtracts α times the gradient from the current parameter."
    },
    "answer": 2,
    "zh": {
      "stem": "梯度下降的更新公式是？",
      "options": [
        "w←w+α∇f(w)",
        "w←−α∇f(w)",
        "w←w−α∇f(w)",
        "w←w−α²∇f(w)"
      ],
      "explanation": "从当前参数出发沿负梯度移动，步长由 α 控制。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "1-1-13",
    "chapter": 1,
    "quiz": 1,
    "number": 13,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "Let f(w)=w², w₀=1 and α=0.1. What is w₁ after one gradient-descent update?",
      "options": [
        "0.98",
        "1.2",
        "0.9",
        "0.8"
      ],
      "explanation": "f′(w)=2w, so w₁=1−0.1×2=0.8."
    },
    "answer": 3,
    "zh": {
      "stem": "f(w)=w²，w₀=1，步长 α=0.1。一次梯度下降后 w₁ 为？",
      "options": [
        "0.98",
        "1.2",
        "0.9",
        "0.8"
      ],
      "explanation": "f′(w)=2w，所以 w₁=1−0.1×2=0.8。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "1-1-14",
    "chapter": 1,
    "quiz": 1,
    "number": 14,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "The lecture gives σ(2) ≈ 0.88 for σ(z) = 1/(1 + e^(−z)). Using σ(−z) = 1 − σ(z), what is σ(−2)?",
      "options": [
        "0.88",
        "0.27",
        "0.12",
        "0.50"
      ],
      "explanation": "σ(−2)=1−σ(2)≈1−0.88=0.12."
    },
    "answer": 2,
    "zh": {
      "stem": "已知 sigmoid σ(2)≈0.88，利用 σ(−z)=1−σ(z)，σ(−2) 为？",
      "options": [
        "0.88",
        "0.27",
        "0.12",
        "0.50"
      ],
      "explanation": "σ(−2)=1−0.88=0.12。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "1-1-15",
    "chapter": 1,
    "quiz": 1,
    "number": 15,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "For p=(0.5,0.5) and true class 2, one-hot=(0,1), the logit gradient p−one-hot equals:",
      "options": [
        "(0.5, −0.5)",
        "(0.5, 0.5)",
        "(0, −1)",
        "(−0.5, 0.5)"
      ],
      "explanation": "Subtract componentwise: (0.5,0.5)−(0,1)=(0.5,−0.5)."
    },
    "answer": 0,
    "zh": {
      "stem": "预测 p=(0.5,0.5)，真实类别为第 2 类，即 one-hot=(0,1)。交叉熵对 logits 的梯度 p−one-hot 是？",
      "options": [
        "(0.5,−0.5)",
        "(0.5,0.5)",
        "(0,−1)",
        "(−0.5,0.5)"
      ],
      "explanation": "逐项相减：(0.5,0.5)−(0,1)=(0.5,−0.5)。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "1-1-16",
    "chapter": 1,
    "quiz": 1,
    "number": 16,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "In the terminology of the lecture, overfitting means:",
      "options": [
        "train error is small while test error stays large",
        "both train error and test error are large",
        "train error is large while test error is small",
        "the model was trained with too large a learning rate"
      ],
      "explanation": "Overfitting: train error is small, while test error stays large. [Slide 26] Quiz2"
    },
    "answer": 0,
    "zh": {
      "stem": "过拟合是指什么？",
      "options": [
        "训练误差小而测试误差仍较大",
        "训练和测试误差都大",
        "训练误差大而测试误差小",
        "训练时学习率过大"
      ],
      "explanation": "过拟合表现为拟合训练样本很好，但对新样本表现较差。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "1-2-1",
    "chapter": 1,
    "quiz": 2,
    "number": 1,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "True/False) Test error equals training error plus representation error.",
      "options": [
        "True",
        "False"
      ],
      "explanation": "Test error = Training error + Generalization gap Training error = representation error + optimization error"
    },
    "answer": 1,
    "zh": {
      "stem": "判断：测试误差等于训练误差加表示误差。",
      "options": [
        "正确",
        "错误"
      ],
      "explanation": "测试误差=训练误差+泛化差距；训练误差还可分为表示误差与优化误差。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "1-2-2",
    "chapter": 1,
    "quiz": 2,
    "number": 2,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "(True/False) Two experiments: one uses lr = 0.003, loss decreases very slowly; the other uses lr = 3, loss oscillates until NaN. The phenomena are completely different, but they belong to the same error family: optimization error.",
      "options": [
        "True",
        "False"
      ],
      "explanation": "Both cases stem from the same optimization error: an improperly chosen learning rate—too small (0.003) leads to slow convergence, while too large (3) causes gradient explosion and ultimately NaN—yet both are failures in the optimization dynamics."
    },
    "answer": 0,
    "zh": {
      "stem": "判断：学习率 0.003 导致损失下降很慢，学习率 3 导致震荡甚至 NaN，二者都属于优化问题。",
      "options": [
        "正确",
        "错误"
      ],
      "explanation": "过小步长使进展缓慢，过大步长可能导致发散，都是优化动力学的问题。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "1-2-3",
    "chapter": 1,
    "quiz": 2,
    "number": 3,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "A purely linear model with 0 hidden layers is run on circle data, and the train loss plateaus at ≈ 0.55. Which of the following operations will necessarily cause the train loss to continue decreasing significantly?",
      "options": [
        "Increase epochs by 10×.",
        "Change to a network with 2 hidden layers, 8 neurons per layer.",
        "Change lr from 0.1 to 3.",
        "None of above"
      ],
      "explanation": "The source explanation intends B: nonlinear hidden layers address the representation limit. However, “necessarily” is too strong because improved capacity does not guarantee successful optimization. D is defensible literally. Both B and D are accepted here."
    },
    "answer": 1,
    "zh": {
      "stem": "无隐藏层的线性模型拟合圆形数据，训练损失停在约 0.55。哪项操作必然使训练损失继续显著下降？",
      "options": [
        "训练轮数增加 10 倍",
        "改为 2 个隐藏层、每层 8 个神经元的网络",
        "学习率从 0.1 改为 3",
        "以上都不是"
      ],
      "explanation": "原讲解意在选 B：非线性网络可突破线性模型的表示限制。但原题的“必然”过强：增大容量不保证实际优化成功；严格按字面 D 也合理。本网页接受 B 和 D，并保留这一歧义说明。"
    },
    "accepted": [
      1,
      3
    ],
    "note": true,
    "scored": true
  },
  {
    "id": "1-2-4",
    "chapter": 1,
    "quiz": 2,
    "number": 4,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "(True/False) A flattening loss curve means training has converged.",
      "options": [
        "True",
        "False"
      ],
      "explanation": "A flattening loss curve only indicates a temporary plateau in optimization dynamics, not guaranteed convergence to stationary points"
    },
    "answer": 1,
    "zh": {
      "stem": "判断：损失曲线变平意味着训练已收敛。",
      "options": [
        "正确",
        "错误"
      ],
      "explanation": "平台期可能由过小学习率、梯度很小或病态曲率导致，不能单凭曲线平坦断言已经收敛。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "1-2-5",
    "chapter": 1,
    "quiz": 2,
    "number": 5,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "(True/False) A 4×16 network trained on 20 training samples has train loss ≈ 0. This indicates that the model's optimization error is very small (the full problem is the generalization bar).",
      "options": [
        "True",
        "False"
      ],
      "explanation": "Near-zero training loss indicates successful empirical risk minimization, implying negligible optimization error; the remaining challenge is generalization, particularly with limited data and a high-capacity model."
    },
    "answer": 0,
    "zh": {
      "stem": "判断：4×16 的网络在 20 个训练样本上损失约为 0，表明优化误差很小，主要剩余问题是泛化。",
      "options": [
        "正确",
        "错误"
      ],
      "explanation": "对非负损失，训练损失近零意味着经验优化已经很好；少量样本仍可能导致较大泛化差距。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "1-2-6",
    "chapter": 1,
    "quiz": 2,
    "number": 6,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "A 4×16 network, 20 training samples, lr = 0.1. Only change lr to 0.05 (still converges normally and is sufficiently trained), all else unchanged. Which of the following is correct regarding the changes in the three bars?",
      "options": [
        "The optimization bar becomes significantly larger.",
        "The generalization bar becomes significantly smaller.",
        "All three bars change significantly.",
        "The representation bar remains essentially unchanged."
      ],
      "explanation": "Changing the learning rate does not alter the model architecture, so the representation error (capacity) stays the same. Since both learning rates yield normal convergence and sufficient training, the optimization error remains negligible; generalization may vary but is not guaranteed to change significantly. Thus, only the representation bar is essentially unchanged."
    },
    "answer": 3,
    "zh": {
      "stem": "4×16 网络用 20 个样本，学习率从 0.1 改为 0.05，均正常收敛且训练充分。哪项正确？",
      "options": [
        "优化误差显著增大",
        "泛化误差显著减小",
        "三类误差均显著改变",
        "表示误差基本不变"
      ],
      "explanation": "表示能力由模型函数类决定。只改学习率并不改变架构，因此表示误差不变。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "1-2-7",
    "chapter": 1,
    "quiz": 2,
    "number": 7,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "(True/False) In an experiment: test error = 15%, train error = 9%. Then the generalization gap = 4%.",
      "options": [
        "True",
        "False"
      ],
      "explanation": "The generalization gap is defined as test error minus train error, i.e., 15% − 9% = 6%"
    },
    "answer": 1,
    "zh": {
      "stem": "判断：测试误差 15%，训练误差 9%，泛化差距为 4%。",
      "options": [
        "正确",
        "错误"
      ],
      "explanation": "泛化差距为 15%−9%=6 个百分点，不是 4%。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "1-2-8",
    "chapter": 1,
    "quiz": 2,
    "number": 8,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "Given: model train loss ≈ 0, and the baseline loss (from a large network fully trained) has reached the lowest on the same data. To reduce test loss, which operation is most effective?",
      "options": [
        "Switch to a larger network.",
        "Increase training data.",
        "Double lr.",
        "Train for more epochs."
      ],
      "explanation": "With train loss near zero, training loss is already small enough; adding more training samples directly reduces the generalization error, while architectural or optimization adjustments cannot address the data scarcity issue."
    },
    "answer": 1,
    "zh": {
      "stem": "训练损失已接近 0，同数据上充分训练的大网络基线也已达到最低损失。降低测试损失最有效的选择是？",
      "options": [
        "换更大的网络",
        "增加训练数据",
        "学习率翻倍",
        "增加训练轮数"
      ],
      "explanation": "训练已经很好，此时增加有代表性的训练数据更直接针对泛化问题；并不保证每次增加数据都改善。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "1-2-9",
    "chapter": 1,
    "quiz": 2,
    "number": 9,
    "source": "01_Lecture1-Quiz.pdf",
    "en": {
      "stem": "A training demo uses the Two Moons dataset with only 20 samples (11 for training / 9 for testing), and training is sufficient (epochs ≈ 68k, optimization error ≈ 0). The results are: train loss 0.2880 (training accuracy 90.9%), test loss 0.0815 (test accuracy 100%), and the three-error decomposition gives a generalization error of −0.2065 (negative). Which of the following is correct?",
      "options": [
        "Generalization error, by definition, is test minus train and cannot be negative; a negative value indicates a bug in the code or decomposition formula.",
        "A negative gap indicates that the network structure truly \"generalizes better than training\" at the distribution level and can be deployed directly.",
        "The sample size is too small, and a few test points happen to fall in easy positions, causing the empirical gap estimate to fluctuate around the true value and happen to be negative; increasing the sample size (or averaging over multiple random train/test partitions) will eliminate this phenomenon, without needing to adjust the structure or learning rate.",
        "Training has not yet converged; increasing the epoch by a factor of 10 will make the generalization error return to positive."
      ],
      "explanation": "An empirical test-minus-train gap can be negative. With only nine test points, sampling variability is substantial. More samples or repeated splits improve reliability, but do not guarantee a positive gap. C is the intended answer; its claim to “eliminate” the phenomenon is too strong."
    },
    "answer": 2,
    "zh": {
      "stem": "Two Moons 仅 20 个样本（训练 11、测试 9），训练充分。训练损失 0.2880，测试损失 0.0815，经验泛化差距 −0.2065。哪项解释正确？",
      "options": [
        "泛化差距不可能为负，一定是程序错误",
        "说明分布层面泛化比训练更好，可直接部署",
        "样本太少，测试点恰好较容易；增加样本或多次划分平均可改善估计",
        "尚未收敛，训练轮数加 10 倍会变正"
      ],
      "explanation": "经验测试损失可能小于训练损失，差距可以为负。更多数据或多次划分能减少估计波动，但不严格保证差距一定变正；原选项“消除”应理解为减小抽样影响。"
    },
    "note": true,
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "2-1-1",
    "chapter": 2,
    "quiz": 1,
    "number": 1,
    "source": "Week2Quiz1_Backpropagation.pdf",
    "en": {
      "stem": "Let F=‖M−W₁W₂‖²_F, with M=[3], W₁=[1], W₂=[2]. What is ∂F/∂W₁?",
      "options": [
        "4",
        "−2",
        "−1",
        "−4"
      ],
      "explanation": "R=3−1×2=1. The gradient is −2RW₂ᵀ=−4."
    },
    "answer": 3,
    "zh": {
      "stem": "F=‖M−W₁W₂‖²_F，M=[3]，W₁=[1]，W₂=[2]。∂F/∂W₁ 是？",
      "options": [
        "4",
        "−2",
        "−1",
        "−4"
      ],
      "explanation": "残差 Δ=3−1×2=1。梯度为 −2ΔW₂ᵀ=−4。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "2-1-2",
    "chapter": 2,
    "quiz": 1,
    "number": 2,
    "source": "Week2Quiz1_Backpropagation.pdf",
    "en": {
      "stem": "The output layer is linear, z_L=h_L, and F=‖z_L−y‖² without a factor 1/2. What is e_L=∂F/∂h_L?",
      "options": [
        "z_L−y",
        "(z_L−y)/2",
        "0",
        "2(z_L−y)"
      ],
      "explanation": "Differentiating the squared loss gives 2(z_L−y); the linear output Jacobian is the identity."
    },
    "answer": 3,
    "zh": {
      "stem": "输出层为线性 z_L=h_L，损失 F=‖z_L−y‖²（没有 1/2 系数）。e_L=∂F/∂h_L 为？",
      "options": [
        "z_L−y",
        "(z_L−y)/2",
        "0",
        "2(z_L−y)"
      ],
      "explanation": "平方损失求导产生系数 2；线性输出层的导数为恒等映射。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "2-1-3",
    "chapter": 2,
    "quiz": 1,
    "number": 3,
    "source": "Week2Quiz1_Backpropagation.pdf",
    "en": {
      "stem": "If h_L=W_Lz_(L−1), which relationship is correct?",
      "options": [
        "∂F/∂W_L=e_Lz_(L−1)ᵀ",
        "e_L=∂F/∂W_L",
        "There is no direct relationship",
        "∂F/∂W_L=z_(L−1)e_Lᵀ"
      ],
      "explanation": "The gradient is the outer product of the layer error and previous activation; its shape matches W_L."
    },
    "answer": 0,
    "zh": {
      "stem": "若 h_L=W_Lz_(L−1)，哪项正确？",
      "options": [
        "∂F/∂W_L=e_Lz_(L−1)ᵀ",
        "e_L=∂F/∂W_L",
        "两者没有直接关系",
        "∂F/∂W_L=z_(L−1)e_Lᵀ"
      ],
      "explanation": "权重梯度是当前层误差与前一层激活的外积，形状与 W_L 一致。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "2-1-4",
    "chapter": 2,
    "quiz": 1,
    "number": 4,
    "source": "Week2Quiz1_Backpropagation.pdf",
    "en": {
      "stem": "For a linear network with no activation functions, the backward recursion is:",
      "options": [
        "e_l=e_(l+1)",
        "e_l=W_(l+1)ᵀe_(l+1)",
        "e_l=W_(l+1)e_(l+1)",
        "e_l=D_lW_(l+1)ᵀe_(l+1)"
      ],
      "explanation": "The intended answer B omits any activation-derivative factor. If D_l is defined as I, D is algebraically equivalent; the course convention here is to omit D_l in a linear network."
    },
    "answer": 1,
    "zh": {
      "stem": "无激活函数的线性网络，反向递推公式为？",
      "options": [
        "e_l=e_(l+1)",
        "e_l=W_(l+1)ᵀe_(l+1)",
        "e_l=W_(l+1)e_(l+1)",
        "e_l=D_lW_(l+1)ᵀe_(l+1)"
      ],
      "explanation": "线性网络没有额外激活导数因子，误差经权重转置反传。原选项 D 若把 D_l 定义为 I 则也等价；本题按“不出现激活导数矩阵”的课程约定选 B。"
    },
    "note": true,
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "2-1-5",
    "chapter": 2,
    "quiz": 1,
    "number": 5,
    "source": "Week2Quiz1_Backpropagation.pdf",
    "en": {
      "stem": "In ∂F/∂W_l=[W_(l+1)ᵀ⋯W_Lᵀe_L]z_(l−1)ᵀ, what does the bracketed product do?",
      "options": [
        "Invert the weight matrices",
        "Amplify the error by a factor of L",
        "Propagate the output-layer error back to layer l, yielding el",
        "Perform forward propagation again"
      ],
      "explanation": "It propagates the output error backward to obtain e_l. Multiplication acts from right to left."
    },
    "answer": 2,
    "zh": {
      "stem": "在线性网络中，梯度表达式 [W_(l+1)ᵀ⋯W_Lᵀe_L]z_(l−1)ᵀ 的方括号部分作用是什么？",
      "options": [
        "求权重逆矩阵",
        "将误差放大 L 倍",
        "把输出层误差反传到第 l 层得到 e_l",
        "再次前向传播"
      ],
      "explanation": "从右向左逐层乘权重转置，将 e_L 转换为 e_l，然后与缓存的激活做外积。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "2-1-6",
    "chapter": 2,
    "quiz": 1,
    "number": 6,
    "source": "Week2Quiz1_Backpropagation.pdf",
    "en": {
      "stem": "Why can the gradient of Wl be computed immediately after backpropagation obtains el?",
      "options": [
        "Because the gradient of Wl depends only on el",
        "Because both el and the saved forward activation zl−1 are known",
        "Because el−1 has already been computed",
        "Because Wl+1 does not participate in backpropagation"
      ],
      "explanation": "The gradient is e_lz_(l−1)ᵀ. Both e_l and the cached forward activation are available, so another forward pass is unnecessary."
    },
    "answer": 1,
    "zh": {
      "stem": "反向传播得到 e_l 后，为什么可以立即计算 W_l 的梯度？",
      "options": [
        "梯度只依赖 e_l",
        "e_l 和前向缓存 z_(l−1) 均已知",
        "e_(l−1) 已计算",
        "W_(l+1) 不参与反向传播"
      ],
      "explanation": "∂F/∂W_l=e_lz_(l−1)ᵀ，不需要再次前向计算，也不需要先求 e_(l−1)。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "2-1-7",
    "chapter": 2,
    "quiz": 1,
    "number": 7,
    "source": "Week2Quiz1_Backpropagation.pdf",
    "en": {
      "stem": "For ReLU, h_l=[2,−3]ᵀ. What is D_l=diag(φ′(h_l))?",
      "options": [
        "diag(2,−3)",
        "diag(1,1)",
        "diag(0,1)",
        "diag(1,0)"
      ],
      "explanation": "ReLU has derivative 1 at positive inputs and 0 at negative inputs."
    },
    "answer": 3,
    "zh": {
      "stem": "ReLU 网络的 h_l=[2,−3]ᵀ，D_l=diag(φ′(h_l)) 为？",
      "options": [
        "diag(2,−3)",
        "diag(1,1)",
        "diag(0,1)",
        "diag(1,0)"
      ],
      "explanation": "ReLU 在正数处导数为 1，在负数处为 0。矩阵中存的是导数而非激活值。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "2-1-8",
    "chapter": 2,
    "quiz": 1,
    "number": 8,
    "source": "Week2Quiz1_Backpropagation.pdf",
    "en": {
      "stem": "F(X,Y)=‖M−XYᵀ‖²_F, with M∈ℝ^(m×n), X∈ℝ^(m×r), Y∈ℝ^(n×r), R=M−XYᵀ. What are the gradients with respect to X and Y?",
      "options": [
        "−2RᵀY; −2RX",
        "2RY; 2RᵀX",
        "−2RY; −2RᵀX",
        "−2YRᵀ; −2XR"
      ],
      "explanation": "Matrix differentiation gives ∂F/∂X=−2RY and ∂F/∂Y=−2RᵀX. Their dimensions match X and Y."
    },
    "answer": 2,
    "zh": {
      "stem": "F(X,Y)=‖M−XYᵀ‖²_F，M∈ℝ^(m×n)，X∈ℝ^(m×r)，Y∈ℝ^(n×r)，R=M−XYᵀ。两个梯度为？",
      "options": [
        "−2RᵀY；−2RX",
        "2RY；2RᵀX",
        "−2RY；−2RᵀX",
        "−2YRᵀ；−2XR"
      ],
      "explanation": "对 X、Y 分别使用链式法则，得到 −2RY 与 −2RᵀX。还可用维度检查排除转置错误。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "2-1-9",
    "chapter": 2,
    "quiz": 1,
    "number": 9,
    "source": "Week2Quiz1_Backpropagation.pdf",
    "en": {
      "stem": "F(W)=‖M−AWBᵀ‖²_F and R=M−AWBᵀ. What is ∂F/∂W?",
      "options": [
        "−2AᵀRB",
        "−2ARBᵀ",
        "−2AᵀRᵀB",
        "−2ARᵀBᵀ"
      ],
      "explanation": "dF=−2tr(RᵀA dW Bᵀ). Rewriting as a Frobenius inner product gives −2AᵀRB."
    },
    "answer": 0,
    "zh": {
      "stem": "F(W)=‖M−AWBᵀ‖²_F，R=M−AWBᵀ。∂F/∂W 为？",
      "options": [
        "−2AᵀRB",
        "−2ARBᵀ",
        "−2AᵀRᵀB",
        "−2ARᵀBᵀ"
      ],
      "explanation": "dF=−2tr(RᵀA dW Bᵀ)，整理成 Frobenius 内积得到 −2AᵀRB。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "2-1-10",
    "chapter": 2,
    "quiz": 1,
    "number": 10,
    "source": "Week2Quiz1_Backpropagation.pdf",
    "en": {
      "stem": "A mini-batch has m samples with errors eᵢ and inputs zᵢ; all vector dimensions are at least m. Ignoring batch averaging, what is the weight gradient and its maximum possible rank?",
      "options": [
        "Σᵢeᵢzᵢᵀ; 1",
        "Σᵢeᵢzᵢᵀ; m",
        "(Σᵢeᵢ)(Σᵢzᵢ)ᵀ; m",
        "(Σᵢeᵢ)(Σᵢzᵢ)ᵀ; m²"
      ],
      "explanation": "Each sample contributes an outer product of rank at most 1. Their sum has rank at most m, attainable for independent vectors. Multiplying the sums is a different expression with rank at most 1."
    },
    "answer": 1,
    "zh": {
      "stem": "小批量有 m 个样本，误差 eᵢ、输入 zᵢ，向量维度均至少为 m。忽略平均系数，梯度及其最大可能秩是？",
      "options": [
        "Σᵢeᵢzᵢᵀ；1",
        "Σᵢeᵢzᵢᵀ；m",
        "(Σᵢeᵢ)(Σᵢzᵢ)ᵀ；m",
        "(Σᵢeᵢ)(Σᵢzᵢ)ᵀ；m²"
      ],
      "explanation": "每个样本贡献至多秩 1 的外积，m 项之和秩至多 m；独立向量可达到该上界。“先求和再外积”不是同一个梯度。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "2-1-11",
    "chapter": 2,
    "quiz": 1,
    "number": 11,
    "source": "Week2Quiz1_Backpropagation.pdf",
    "en": {
      "stem": "Why does one backward sweep require only O(L) matrix multiplications?",
      "options": [
        "Because the gradient matrices are sparse",
        "Because some layers can be skipped",
        "Because matrix multiplication can be parallelized",
        "Because the error recursion can be reused layer by layer, without expanding the entire product chain separately for each layer"
      ],
      "explanation": "Backpropagation reuses recursively computed errors rather than recomputing each full product chain. O(L) counts matrix multiplications, not scalar operations independently of width."
    },
    "answer": 3,
    "zh": {
      "stem": "为什么一次反向扫描只需 O(L) 次矩阵乘法？",
      "options": [
        "梯度矩阵稀疏",
        "可以跳过一些层",
        "矩阵乘法可并行",
        "递推复用误差，无需为每层重新展开整条乘积链"
      ],
      "explanation": "反向传播复用中间结果。这里 O(L) 计数的是矩阵乘法次数，不是与矩阵尺寸无关的总浮点运算量。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "2-2-1",
    "chapter": 2,
    "quiz": 2,
    "number": 1,
    "source": "Week2-Quiz2.pdf",
    "en": {
      "stem": "In the lecture’s informal use of O(1), what is intended by saying the output/input norm ratio is O(1)?",
      "options": [
        "Output equals input elementwise",
        "The ratio stays at a comparable scale, neither exploding nor vanishing with depth",
        "The ratio is exactly 1",
        "The ratio grows linearly with depth"
      ],
      "explanation": "The lecture uses O(1) informally for stable scale. Strict big-O notation alone gives only an upper bound and does not exclude vanishing."
    },
    "answer": 1,
    "zh": {
      "stem": "本讲非严格使用 O(1) 描述输出与输入范数之比，意图是什么？",
      "options": [
        "输出与输入逐元素相等",
        "随深度保持同一数量级，不爆炸也不消失",
        "比值严格为 1",
        "比值随层数线性增长"
      ],
      "explanation": "这里 O(1) 是“不会太大或太小”的非严格说法；严格的 O(1) 只给上界，并不排除趋于零。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "2-2-2",
    "chapter": 2,
    "quiz": 2,
    "number": 2,
    "source": "Week2-Quiz2.pdf",
    "en": {
      "stem": "W∈ℝ^(d_out×d_in) has independent entries with mean 0 and variance 1/d_in. For fixed x, d_in=100 and ‖x‖²=1, what is E[(Wᵢ,:x)²]?",
      "options": [
        "0.01",
        "100",
        "0",
        "1"
      ],
      "explanation": "Independence and zero means remove cross terms, leaving ‖x‖²/d_in=0.01."
    },
    "answer": 0,
    "zh": {
      "stem": "W∈ℝ^(d_out×d_in)，元素独立、均值 0、方差 1/d_in。固定向量 x 满足 ‖x‖²=1，d_in=100。E[(Wᵢ,:x)²] 为？",
      "options": [
        "0.01",
        "100",
        "0",
        "1"
      ],
      "explanation": "展开平方后交叉项期望为零，剩下 ‖x‖²/d_in=1/100。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "2-2-3",
    "chapter": 2,
    "quiz": 2,
    "number": 3,
    "source": "Week2-Quiz2.pdf",
    "en": {
      "stem": "Which initialization is designed for ReLU networks?",
      "options": [
        "All-zero initialization",
        "Bottou–LeCun initialization",
        "Xavier initialization",
        "Kaiming initialization"
      ],
      "explanation": "Kaiming initialization uses variance about 2/d_in to compensate for the second-moment reduction caused by ReLU."
    },
    "answer": 3,
    "zh": {
      "stem": "哪种初始化专为 ReLU 网络设计？",
      "options": [
        "全零初始化",
        "Bottou–LeCun 初始化",
        "Xavier 初始化",
        "Kaiming 初始化"
      ],
      "explanation": "Kaiming 使用约 2/d_in 的权重方差，补偿 ReLU 导致的二阶矩减半。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "2-2-4",
    "chapter": 2,
    "quiz": 2,
    "number": 4,
    "source": "Week2-Quiz2.pdf",
    "en": {
      "stem": "A layer has d_in=100 and d_out=300. What is its Xavier weight variance?",
      "options": [
        "0.01",
        "0.0025",
        "0.02",
        "0.005"
      ],
      "explanation": "Var(Wᵢⱼ)=2/(d_in+d_out)=2/400=0.005."
    },
    "answer": 3,
    "zh": {
      "stem": "某层 d_in=100，d_out=300，Xavier 初始化的元素方差是？",
      "options": [
        "0.01",
        "0.0025",
        "0.02",
        "0.005"
      ],
      "explanation": "Xavier 方差为 2/(d_in+d_out)=2/400=0.005。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "2-2-5",
    "chapter": 2,
    "quiz": 2,
    "number": 5,
    "source": "Week2-Quiz2.pdf",
    "en": {
      "stem": "Why do ReLU networks often use weight variance 2/d_in rather than 1/d_in?",
      "options": [
        "ReLU is faster to compute",
        "For a zero-symmetric input, ReLU halves the second moment, so doubling variance compensates",
        "ReLU requires an extra bias",
        "It is merely convention"
      ],
      "explanation": "For symmetric X, E[ReLU(X)²]=E[X²]/2. Doubling weight variance compensates for this factor."
    },
    "answer": 1,
    "zh": {
      "stem": "为什么 ReLU 常用权重方差 2/d_in，而非 1/d_in？",
      "options": [
        "ReLU 前向计算更快",
        "对零对称输入，ReLU 将二阶矩减半，需要补偿",
        "ReLU 必须增加偏置",
        "只是惯例，没有原因"
      ],
      "explanation": "对对称随机变量 X，E[ReLU(X)²]=E[X²]/2，因此把权重方差乘 2 来补偿。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "2-2-6",
    "chapter": 2,
    "quiz": 2,
    "number": 6,
    "source": "Week2-Quiz2.pdf",
    "en": {
      "stem": "A width-d linear network has weight variance 1/(2d) in every layer. Under the lecture’s independence approximation, what is the expected energy after L layers relative to the input?",
      "options": [
        "Independent of depth",
        "Unchanged",
        "0.5^L, exponential decay",
        "Exponential explosion"
      ],
      "explanation": "Each layer multiplies expected energy by d/(2d)=1/2. After L layers the factor is (1/2)^L."
    },
    "answer": 2,
    "zh": {
      "stem": "等宽 d 的线性网络，每层权重方差 1/(2d)。在独立性近似下，L 层后期望能量是输入的多少倍？",
      "options": [
        "与层数无关",
        "保持不变",
        "0.5^L，即指数衰减",
        "指数爆炸"
      ],
      "explanation": "每层期望能量乘 d×1/(2d)=1/2；重复 L 次得到 (1/2)^L。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "2-2-7",
    "chapter": 2,
    "quiz": 2,
    "number": 7,
    "source": "Week2-Quiz2.pdf",
    "en": {
      "stem": "For f(w)=(w⁷−1)², there is only one minimum, yet fixed-step gradient descent can fail. Why?",
      "options": [
        "The objective function contains many local minima.",
        "Gradient magnitudes at different locations differ enormously, so the same fixed step size is difficult to apply simultaneously.",
        "The gradient formula does not hold at w = 2.",
        "Gradients can be computed only after adding momentum."
      ],
      "explanation": "f′(w)=14w⁶(w⁷−1). The gradient is huge near w=2 but tiny near w=0, so one fixed step can be too large in one region and too small in another."
    },
    "answer": 1,
    "zh": {
      "stem": "f(w)=(w⁷−1)² 只有一个最小点，固定步长梯度下降仍可能失败，主要原因是？",
      "options": [
        "存在很多局部最小值",
        "不同位置梯度大小差异极大，一个固定步长难以兼顾",
        "w=2 时梯度公式失效",
        "只有加动量才能求梯度"
      ],
      "explanation": "f′(w)=14w⁶(w⁷−1)。w=2 附近梯度巨大，w=0 附近梯度很小，因此可能出现发散或进展极慢。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "2-2-8",
    "chapter": 2,
    "quiz": 2,
    "number": 8,
    "source": "Week2-Quiz2.pdf",
    "en": {
      "stem": "Which set of independent, zero-mean weight distributions all have variance 1/d_in?",
      "options": [
        "N(0,1/d_in); U(−1/√d_in,1/√d_in); equally likely ±1/√d_in",
        "N(0,1/d_in); U(−√(3/d_in),√(3/d_in)); equally likely ±√(3/d_in)",
        "N(0,1/d_in); U(−√(3/d_in),√(3/d_in)); equally likely ±1/√d_in",
        "Any zero-symmetric distributions without rescaling"
      ],
      "explanation": "U(−a,a) has variance a²/3; an equally likely ±a variable has variance a². The second parameter in N(0,v) denotes variance."
    },
    "answer": 2,
    "zh": {
      "stem": "希望独立权重均值为 0、方差为 1/d_in。哪组分布都满足？",
      "options": [
        "N(0,1/d_in)；U(−1/√d_in,1/√d_in)；等概率 ±1/√d_in",
        "N(0,1/d_in)；U(−√(3/d_in),√(3/d_in))；等概率 ±√(3/d_in)",
        "N(0,1/d_in)；U(−√(3/d_in),√(3/d_in))；等概率 ±1/√d_in",
        "任意关于零对称的分布，无需调整尺度"
      ],
      "explanation": "U(−a,a) 方差为 a²/3；等概率 ±a 的方差为 a²。正态 N(0,v) 的第二参数这里表示方差。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "2-2-9",
    "chapter": 2,
    "quiz": 2,
    "number": 9,
    "source": "Week2-Quiz2.pdf",
    "en": {
      "stem": "For y=Wx, which condition is NOT required for the expected-energy result?",
      "options": [
        "E[Wᵢⱼ]=0",
        "Var(Wᵢⱼ)=1/d_in",
        "Independent weights; random x is independent of W",
        "W must be Gaussian"
      ],
      "explanation": "Only the appropriate first and second moments and independence are needed, not Gaussianity. The source accidentally repeats the previous explanation; this explanation corrects it."
    },
    "answer": 3,
    "zh": {
      "stem": "单层传播 y=Wx 的期望能量推导不要求哪项？",
      "options": [
        "E[Wᵢⱼ]=0",
        "Var(Wᵢⱼ)=1/d_in",
        "权重互相独立，随机 x 与 W 独立",
        "W 必须服从高斯分布"
      ],
      "explanation": "只需适当的一、二阶矩及独立性，不要求高斯分布。原文件此题误用了上一题讲解，这里已修正。"
    },
    "note": true,
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "2-2-10",
    "chapter": 2,
    "quiz": 2,
    "number": 10,
    "source": "Week2-Quiz2.pdf",
    "en": {
      "stem": "What is the direct role of E[Wᵢⱼ]=0 when deriving the single-layer expected energy?",
      "options": [
        "It makes the expectations of the cross terms that appear after expanding the square equal to 0.",
        "It makes all weights equal to 0.",
        "It makes ReLU deactivate exactly half of the units.",
        "It guarantees that the output norm for every sample is exactly equal to the input norm."
      ],
      "explanation": "Together with independence it gives E[WᵢⱼWᵢₖ]=0 for j≠k, eliminating cross terms after expanding the square."
    },
    "answer": 0,
    "zh": {
      "stem": "推导单层期望能量时，E[Wᵢⱼ]=0 的直接作用是？",
      "options": [
        "结合独立性使平方展开的交叉项期望为零",
        "让所有权重等于零",
        "让 ReLU 恰好关闭一半单元",
        "保证每个样本的输入输出范数严格相同"
      ],
      "explanation": "对 j≠k，独立性与零均值给 E[WᵢⱼWᵢₖ]=0，故交叉项消失。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "3-1-1",
    "chapter": 3,
    "quiz": 1,
    "number": 1,
    "source": "WEEK3QUIZ1.pdf",
    "en": {
      "stem": "For an unbiased deep linear network (φ(t) = t), where each layer employs LeCun variance initialization, the expected signal energy per unit neuron E[|zₗ|²]/dₗ as a function of depth l:",
      "options": [
        "grows exponentially with l",
        "is independent of l",
        "decays exponentially with l",
        "grows linearly with l"
      ],
      "explanation": "With LeCun initialization, each layer sums about d_in terms, each scaled by weight variance 1/d_in. These factors cancel, so the expected signal energy per neuron stays constant with depth."
    },
    "answer": 1,
    "zh": {
      "stem": "无偏置深线性网络 φ(t)=t，各层采用 LeCun 方差初始化。每个神经元的期望信号能量随深度如何变化？",
      "options": [
        "指数增大",
        "与深度无关",
        "指数衰减",
        "线性增大"
      ],
      "explanation": "每层约累加 d_in 项，每项方差缩放 1/d_in，两者抵消，因此保持每个神经元的期望能量。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "3-1-2",
    "chapter": 3,
    "quiz": 1,
    "number": 2,
    "source": "WEEK3QUIZ1.pdf",
    "en": {
      "stem": "In a one-dimensional unbiased linear network y = w₁₀ ··· w₁, where each wᵢ is independently distributed as N(0, 1), the most likely outcome of a typical run is:",
      "options": [
        "|y| ≈ 1, and E[y²] ≈ 1",
        "|y| ≈ 10⁻²⁷, and E[y²] is close to 0",
        "|y| grows exponentially, while E[y² ] decreases with depth",
        "|y| ≈ 10⁻²⁷, but E[y²] = 1"
      ],
      "explanation": "The source marks D, but its claim that a 10-layer product typically has magnitude 10⁻²⁷ is numerically inconsistent. E[log|N(0,1)|]≈−0.635, so the log-scale estimate for 10 layers is exp(−6.35)≈0.00174; 10⁻²⁷ is closer to 100 layers. The valid lesson is that typical products decay while E[y²]=1. This item is unscored."
    },
    "answer": 3,
    "zh": {
      "stem": "一维线性网络 y=w₁₀⋯w₁，各权重独立服从 N(0,1)。原题声称典型运行约为 10⁻²⁷，哪项符合原答案？",
      "options": [
        "通常约为 1，且 E[y²]≈1",
        "通常约为 10⁻²⁷，且 E[y²]≈0",
        "典型值指数增长，二阶矩随深度减小",
        "一次输出可极小，但 E[y²]=1"
      ],
      "explanation": "原答案 D，但“10 层典型值约 10⁻²⁷”有数值错误：E[log∣N(0,1)∣]≈−0.635，10 层的典型尺度约 exp(−6.35)≈0.00174，10⁻²⁷ 更接近约 100 层的量级。正确核心是：典型乘积随深度衰减，而独立性保证 E[y²]=1。本题仅供辨析，不计分。"
    },
    "scored": false,
    "note": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "3-1-3",
    "chapter": 3,
    "quiz": 1,
    "number": 3,
    "source": "WEEK3QUIZ1.pdf",
    "en": {
      "stem": "Let y = (y₁, …, y_d), where each yᵢ i.i.d.∼ N(0, 1). For large d, ‖y‖²/d is most likely to lie near:",
      "options": [
        "0",
        "d",
        "1",
        "√d"
      ],
      "explanation": "‖y‖²/d is the average of d independent squared standard normal variables, each with mean 1. By the law of large numbers, it concentrates near 1."
    },
    "answer": 2,
    "zh": {
      "stem": "yᵢ 独立同分布 N(0,1)，d 很大时 ‖y‖²/d 最可能接近？",
      "options": [
        "0",
        "d",
        "1",
        "√d"
      ],
      "explanation": "这是 d 个独立平方标准正态变量的平均，每项期望为 1，大数定律使平均集中于 1。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "3-1-4",
    "chapter": 3,
    "quiz": 1,
    "number": 4,
    "source": "WEEK3QUIZ1.pdf",
    "en": {
      "stem": "Chebyshev’s inequality bounds P(|X−E[X]|≥tσ) by:",
      "options": [
        "1/t",
        "1/t²",
        "1/(2t)",
        "exp(−t)"
      ],
      "explanation": "Substituting a=tσ into Var(X)/a² gives 1/t²."
    },
    "answer": 1,
    "zh": {
      "stem": "切比雪夫不等式中，P(∣X−E[X]∣≥tσ) 的上界为？",
      "options": [
        "1/t",
        "1/t²",
        "1/(2t)",
        "exp(−t)"
      ],
      "explanation": "代入 Var(X)/(tσ)²=1/t²；当 t 很小时还可与概率上界 1 取最小。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "3-1-5",
    "chapter": 3,
    "quiz": 1,
    "number": 5,
    "source": "WEEK3QUIZ1.pdf",
    "en": {
      "stem": "The dispersion of M_L = (1/d_L)|z_L|² is mainly determined by which of the following ratios?",
      "options": [
        "L − d",
        "Ld",
        "L + d",
        "L/d"
      ],
      "explanation": "Across L layers, signal fluctuations accumulate roughly with L; averaging over d_L neurons reduces them by about 1/d_L. Thus the dispersion is governed mainly by L/d_L."
    },
    "answer": 3,
    "zh": {
      "stem": "M_L=‖z_L‖²/d_L 的离散程度主要由哪项比值控制？",
      "options": [
        "L−d",
        "Ld",
        "L+d",
        "L/d"
      ],
      "explanation": "深度累积波动，宽度平均降低波动。本讲近似下关键比值为深度/宽度。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "3-1-6",
    "chapter": 3,
    "quiz": 1,
    "number": 6,
    "source": "WEEK3QUIZ1.pdf",
    "en": {
      "stem": "Let a layer output be z = (z₁, …, zd), where each zᵢ is independent N(0, 1). Define the per-unit-neuron signal energy M = ‖z‖²/d. Then Var(M) equals:",
      "options": [
        "2/d",
        "2d",
        "2/d²",
        "2/d³"
      ],
      "explanation": "Independent standard normal squares have variance 2. Thus Var((1/d)Σᵢzᵢ²)=2d/d²=2/d."
    },
    "answer": 0,
    "zh": {
      "stem": "zᵢ 独立服从 N(0,1)，M=‖z‖²/d。Var(M) 为？",
      "options": [
        "2/d",
        "2d",
        "2/d²",
        "2/d³"
      ],
      "explanation": "Var(zᵢ²)=2。独立变量方差相加，再除以 d²，得到 2d/d²=2/d。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "3-1-7",
    "chapter": 3,
    "quiz": 1,
    "number": 7,
    "source": "WEEK3QUIZ1.pdf",
    "en": {
      "stem": "When the variance of the weights in each layer is slightly less than 1/din, the signal will, with depth:",
      "options": [
        "grow exponentially",
        "remain stable",
        "decay exponentially",
        "decay linearly"
      ],
      "explanation": "Each layer scales the signal’s second moment by about din· Var(w). If Var(w)<1/d_in, this factor is below 1, so repeated multiplication causes exponential decay with depth."
    },
    "answer": 2,
    "zh": {
      "stem": "每层权重方差略小于 1/d_in，信号随深度如何变化？",
      "options": [
        "指数增大",
        "稳定",
        "指数衰减",
        "线性衰减"
      ],
      "explanation": "每层二阶矩的乘子 d_in Var(w)<1，逐层相乘导致指数衰减。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "3-1-8",
    "chapter": 3,
    "quiz": 1,
    "number": 8,
    "source": "WEEK3QUIZ1.pdf",
    "en": {
      "stem": "Among the three cases ultra-deep, ultra-wide, and wide/depth ratio ~ 1, in which one does M = (1/dout)|y|² concentrate near 1?",
      "options": [
        "Only ultra-deep",
        "Only ultra-wide",
        "All three",
        "Only wide/depth ratio ~ 1"
      ],
      "explanation": "Here, Var(M) scales as L/dout. It becomes small when width greatly exceeds depth, so the ultra-wide case concentrates near 1. For the cases of ultra- deep and width/depth ratio ~1, we discussed in class that M does not concerntrate around 1."
    },
    "answer": 1,
    "zh": {
      "stem": "超深、超宽、宽深比约 1 三种情况，哪种使 M=‖y‖²/d_out 集中于 1？",
      "options": [
        "仅超深",
        "仅超宽",
        "全部",
        "仅宽深比约 1"
      ],
      "explanation": "宽度远大于深度时，L/d_out 很小，波动也小；仅保持期望不足以保证每次实现稳定。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "3-1-9",
    "chapter": 3,
    "quiz": 1,
    "number": 9,
    "source": "WEEK3QUIZ1.pdf",
    "en": {
      "stem": "Which of the following statements about LeCun initialization (for Deep Linear Network) is correct?",
      "options": [
        "It preserves the expectation but does not guarantee an individual realization",
        "It preserves an individual realization but does not guarantee the expectation",
        "It guarantees both the expectation and an individual realization",
        "It guarantees neither, regardless of depth"
      ],
      "explanation": "LeCun initialization preserves signal energy in expectation, not for every weight draw. Individual networks can still fluctuate."
    },
    "answer": 0,
    "zh": {
      "stem": "关于深线性网络 LeCun 初始化，哪项正确？",
      "options": [
        "保持期望，但不保证单次实现",
        "保证单次实现，但不保证期望",
        "二者都保证",
        "无论深度如何都不保证"
      ],
      "explanation": "初始化是对随机权重分布的期望保证，单个网络仍可能发生很大波动。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "3-2-1",
    "chapter": 3,
    "quiz": 2,
    "number": 1,
    "source": "WEEK3QUIZ2.pdf",
    "en": {
      "stem": "Hard-enforcing “‖w‖ ≈ 1” as a constraint (shrinking the feasible set to the sphere) costs:",
      "options": [
        "A decrease in the model’s expressiveness",
        "A decrease in convergence speed",
        "An increase in memory usage",
        "An increase in gradient variance"
      ],
      "explanation": "A fixed-norm constraint removes weight vectors with other magnitudes, shrinking the feasible set and reducing the model’s expressiveness."
    },
    "answer": 0,
    "zh": {
      "stem": "将 ‖w‖≈1 硬性约束到球面上，代价是？",
      "options": [
        "模型表达能力下降",
        "收敛速度必然下降",
        "内存占用增加",
        "梯度方差增加"
      ],
      "explanation": "固定范数排除了其他长度的权重，缩小可行函数集合。这里按讲义对硬约束的讨论作答。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "3-2-2",
    "chapter": 3,
    "quiz": 2,
    "number": 2,
    "source": "WEEK3QUIZ2.pdf",
    "en": {
      "stem": "Among the four alternative methods, the main theoretical obstacle to (1) projection is:",
      "options": [
        "The objective function is non-convex",
        "The gradient does not exist at all",
        "The feasible set is non-convex",
        "The step size cannot be chosen"
      ],
      "explanation": "Projection onto a sphere uses a non-convex feasible set. This is the main obstacle to applying standard convex projection theory."
    },
    "answer": 2,
    "zh": {
      "stem": "投影到单位球面的方法，主要理论障碍是？",
      "options": [
        "目标函数非凸",
        "梯度根本不存在",
        "可行域非凸",
        "无法选择步长"
      ],
      "explanation": "球面是非凸集合（与实心球不同），不能直接套用凸集投影的标准理论。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "3-2-3",
    "chapter": 3,
    "quiz": 2,
    "number": 3,
    "source": "WEEK3QUIZ2.pdf",
    "en": {
      "stem": "The lecture finally adopts min over α, v of F(α · v/‖v‖). The purpose of introducing the scalar α is:",
      "options": [
        "To turn the non-convex problem into a convex problem",
        "To restore the length, without losing expressiveness",
        "To completely remove the activation function φ",
        "To make the choice of learning rate easier"
      ],
      "explanation": "Normalizing v controls its direction; the scalar α restores the magnitude. This separates direction from scale without restricting the represented vector."
    },
    "answer": 1,
    "zh": {
      "stem": "采用 min_(α,v) F(αv/‖v‖)，引入标量 α 的目的是？",
      "options": [
        "把问题变成凸问题",
        "恢复向量长度，避免损失表达能力",
        "去掉激活函数",
        "让学习率更容易选择"
      ],
      "explanation": "v/‖v‖ 负责方向，α 负责尺度，从而不必把权重长度固定为 1。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "3-2-4",
    "chapter": 3,
    "quiz": 2,
    "number": 4,
    "source": "WEEK3QUIZ2.pdf",
    "en": {
      "stem": "In out=γ⊙ĥ+β, where ĥ=(h−μ)/√(σ²+ε), which parameters are learned?",
      "options": [
        "γ and ε",
        "β and ε",
        "Only γ",
        "γ and β"
      ],
      "explanation": "γ is the learned gain and β is the learned shift. ε is a fixed numerical-stability constant."
    },
    "answer": 3,
    "zh": {
      "stem": "out=γ⊙ĥ+β，ĥ=(h−μ)/√(σ²+ε)。可学习参数是？",
      "options": [
        "γ 和 ε",
        "β 和 ε",
        "仅 γ",
        "γ 和 β"
      ],
      "explanation": "γ 是增益，β 是偏置；ε 通常是固定的小正数，保证数值稳定。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "3-2-5",
    "chapter": 3,
    "quiz": 2,
    "number": 5,
    "source": "WEEK3QUIZ2.pdf",
    "en": {
      "stem": "Compared with LayerNorm, which step does RMSNorm remove?",
      "options": [
        "The step of dividing by the scale",
        "The step of subtracting the mean",
        "The learnable gain γ",
        "Taking statistics separately for each sample"
      ],
      "explanation": "RMSNorm removes mean-centering. It still normalizes by the root-mean- square scale and uses a learnable gain."
    },
    "answer": 1,
    "zh": {
      "stem": "相比 LayerNorm，RMSNorm 去掉哪一步？",
      "options": [
        "除以尺度",
        "减去均值",
        "可学习增益 γ",
        "对每个样本分别计算统计量"
      ],
      "explanation": "RMSNorm 不做均值中心化，仍除以均方根并保留可学习增益。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "3-2-6",
    "chapter": 3,
    "quiz": 2,
    "number": 6,
    "source": "WEEK3QUIZ2.pdf",
    "en": {
      "stem": "For deep networks, the main significance of adding LayerNorm or RMSNorm is:",
      "options": [
        "To stabilize the scale of each sample’s hidden representation, making subsequent layers easier to optimize",
        "To make the hidden representations of different samples identical, eliminating differences between samples",
        "To turn the entire network’s objective function into a convex function, guaranteeing a global optimum",
        "To automatically select the best learning rate for each layer, replacing optimizer tuning"
      ],
      "explanation": "LayerNorm and RMSNorm keep hidden activation scales more stable across layers, which makes deep networks easier to optimize."
    },
    "answer": 0,
    "zh": {
      "stem": "深层网络加入 LayerNorm 或 RMSNorm 的主要意义是？",
      "options": [
        "稳定每个样本的隐藏表示尺度，便于后续优化",
        "使不同样本隐藏表示完全相同",
        "使整个目标变凸并保证全局最优",
        "自动选择最佳学习率，替代调参"
      ],
      "explanation": "归一化有助于稳定激活尺度，但不消除样本差异，也不保证凸性或自动选学习率。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "3-2-7",
    "chapter": 3,
    "quiz": 2,
    "number": 7,
    "source": "WEEK3QUIZ2.pdf",
    "en": {
      "stem": "For sequences of different lengths or single-sample inference, LayerNorm and RMSNorm can usually still be used directly, mainly because:",
      "options": [
        "The required statistics are computed from the current sample’s own features",
        "The required statistics are uniformly precomputed from the entire training set",
        "The required statistics are determined only by the variance of the model weights",
        "All sequences must be padded to the same length before computation"
      ],
      "explanation": "The source explicitly provides no answer for Week 3. As a supplemental explanation, A is appropriate: standard LN/RMSNorm computes statistics from the current sample (often each token’s hidden features). This item is unscored."
    },
    "answer": 0,
    "zh": {
      "stem": "变长序列或单样本推理时，LayerNorm/RMSNorm 通常仍可直接使用，主要因为？",
      "options": [
        "统计量来自当前样本自身的特征",
        "统计量统一从整个训练集预计算",
        "统计量只由权重方差决定",
        "必须先补齐所有序列长度"
      ],
      "explanation": "原 Quiz 标为“不适用于 Week 3，无答案”。补充讲解：标准 LN/RMSNorm 按样本（常按每个 token 的隐藏维）计算统计量，因此 A 合理。作为补充题，不计分。"
    },
    "scored": false,
    "note": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "3-2-8",
    "chapter": 3,
    "quiz": 2,
    "number": 8,
    "source": "WEEK3QUIZ2.pdf",
    "en": {
      "stem": "Normalization pins down the forward signal, but what it has not fixed is:",
      "options": [
        "The forward scale",
        "The backward signal",
        "The weight norm",
        "The learning rate"
      ],
      "explanation": "The source provides no answer. In context the intended distinction is B: stabilizing forward activations does not guarantee stable backward gradients. It does not automatically fix a learning rate or weight norm either. This supplemental item is unscored."
    },
    "answer": 1,
    "zh": {
      "stem": "归一化控制前向信号，但没有因此自动解决什么？",
      "options": [
        "前向尺度",
        "反向信号",
        "权重范数",
        "学习率"
      ],
      "explanation": "原 Quiz 未给答案。按本讲上下文，意图为 B：前向尺度稳定不保证反向梯度稳定；也不能理解为已经自动确定权重范数或学习率。本题作为补充题，不计分。"
    },
    "scored": false,
    "note": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "3-2-9",
    "chapter": 3,
    "quiz": 2,
    "number": 9,
    "source": "WEEK3QUIZ2.pdf",
    "en": {
      "stem": "To encourage ‖w‖≈1, add R(w)=(‖w‖²−1)². What is its main theoretical cost among these options?",
      "options": [
        "R(w) is non-convex.",
        "R(w) is non-smooth.",
        "R(w) increases the computational cost.",
        "R(w) causes the gradient variance to increase."
      ],
      "explanation": "A is best among the listed choices: (w²−1)² has negative curvature near zero. The source notes that distorting the original optimum is another key concern that should have been offered as an option."
    },
    "answer": 0,
    "zh": {
      "stem": "为使 ‖w‖接近 1，加入 R(w)=(‖w‖²−1)²，其主要理论代价是？",
      "options": [
        "R(w) 非凸",
        "R(w) 不光滑",
        "R(w) 增加计算成本",
        "R(w) 导致梯度方差增加"
      ],
      "explanation": "给定选项中 A 最佳：沿一维看 (w²−1)² 在 0 附近二阶导数为负。原讲解也指出，更根本的问题是正则项可能改变原问题最优解，但选项未列出。"
    },
    "note": true,
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "4-1-1",
    "chapter": 4,
    "quiz": 1,
    "number": 1,
    "source": "Week4-Quiz1.pdf",
    "en": {
      "stem": "Let H∈ℝ^(d×n), with samples in columns. Which values form one standard LayerNorm normalization group?",
      "options": [
        "All sample values in the same row.",
        "All feature values in the same column.",
        "All elements of the matrix.",
        "Each element separately."
      ],
      "explanation": "In standard LayerNorm, the mean and standard deviation are computed independently for each sample (column) across its feature values. A: mixes different samples; C: the entire matrix is not treated as one normalization group; D: statistics are not computed separately for each element."
    },
    "answer": 1,
    "zh": {
      "stem": "激活矩阵 H∈ℝ^(d×n)，每列一个样本。标准 LayerNorm 用哪些值计算一次均值和标准差？",
      "options": [
        "同一行的所有样本",
        "同一列的所有特征",
        "矩阵全部元素",
        "每个元素单独计算"
      ],
      "explanation": "LN 对每个样本独立，沿特征维统计；本题矩阵按列放样本，因此选 B。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "4-1-2",
    "chapter": 4,
    "quiz": 1,
    "number": 2,
    "source": "Week4-Quiz1.pdf",
    "en": {
      "stem": "When a new sample enters a trained standard LayerNorm layer, how are its statistics and affine parameters obtained?",
      "options": [
        "Reuse the statistics and relearn the affine parameters.",
        "Relearn both the statistics and the affine parameters.",
        "Reuse both the statistics and the affine parameters.",
        "Recompute the statistics and reuse the affine parameters."
      ],
      "explanation": "Recompute mean and variance from the new sample, while reusing the trained affine parameters γ and β."
    },
    "answer": 3,
    "zh": {
      "stem": "新样本进入训练好的标准 LayerNorm，统计量和仿射参数如何获得？",
      "options": [
        "复用统计量、重学仿射参数",
        "二者都重新学习",
        "二者都复用",
        "重算统计量、复用仿射参数"
      ],
      "explanation": "均值与方差由当前输入计算；γ、β 在训练时学得，推理时保持不变。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "4-1-3",
    "chapter": 4,
    "quiz": 1,
    "number": 3,
    "source": "Week4-Quiz1.pdf",
    "en": {
      "stem": "Two networks are defined on the same input domain. What must be compared to determine whether their function classes are equal?",
      "options": [
        "Whether they can achieve the same training error.",
        "Whether every complete function in either class can be matched by a function in the other class.",
        "Whether they have the same number of learnable parameters.",
        "Whether their gradient updates are identical."
      ],
      "explanation": "When matching a function, its parameters must be fixed, and the match must hold over the entire input domain; A only con siders the loss on the data, whereas C and D fall outside the defini tion of function-class equality."
    },
    "answer": 1,
    "zh": {
      "stem": "判断两个网络的函数类是否相同，需要比较什么？",
      "options": [
        "是否能达到相同训练误差",
        "双方每个完整函数能否由对方匹配",
        "参数数量是否相同",
        "梯度更新是否相同"
      ],
      "explanation": "函数类相等要求固定一组参数后在整个输入域匹配，而不只是有限训练样本或损失数值一致。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "4-1-4",
    "chapter": 4,
    "quiz": 1,
    "number": 4,
    "source": "Week4-Quiz1.pdf",
    "en": {
      "stem": "Inputs and outputs are in ℝ²; all hidden layers have width 2, with no biases or activations. Compare y=Wx with y=W₅W₄W₃W₂W₁x.",
      "options": [
        "The five-layer class strictly contains the single-layer class.",
        "The single-layer class strictly contains the five-layer class.",
        "The two function classes are identical.",
        "Neither class contains the other."
      ],
      "explanation": "A product of 2×2 matrices is a 2×2 linear map. Conversely, extra identity matrices reproduce any single-layer map, so the classes are equal."
    },
    "answer": 2,
    "zh": {
      "stem": "输入、输出均为 ℝ²，无偏置和激活，每个隐藏层宽度 2。单层 y=Wx 与五层 y=W₅⋯W₁x 的函数类关系是？",
      "options": [
        "五层严格包含单层",
        "单层严格包含五层",
        "完全相同",
        "互不包含"
      ],
      "explanation": "矩阵乘积仍是 2×2 线性映射；反过来把额外层设为 I 即可表示任意单层映射。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "4-1-5",
    "chapter": 4,
    "quiz": 1,
    "number": 5,
    "source": "Week4-Quiz1.pdf",
    "en": {
      "stem": "A deep linear network maps ℝ² to ℝ² but has a hidden layer of width 1, with no biases or activations. Compared with an arbitrary single-layer 2×2 map, which statement is correct?",
      "options": [
        "The single layer can represent the identity map, but the bottleneck network cannot.",
        "The bottleneck network can represent the identity map, but the single layer cannot.",
        "Both networks can represent only maps of rank at most one.",
        "The networks can represent exactly the same linear maps."
      ],
      "explanation": "A single-layer network can use any 2×2 matrix, including the identity map I. A bottleneck network with hidden width 1 has an overall matrix product whose rank is at most 1, so it cannot represent the rank-2 identity map."
    },
    "answer": 0,
    "zh": {
      "stem": "输入、输出均为 ℝ²，深线性网络有宽度 1 的瓶颈层。与任意 2×2 单层线性映射相比，哪项正确？",
      "options": [
        "单层可表示恒等映射，瓶颈网络不能",
        "瓶颈网络可表示恒等映射，单层不能",
        "二者都只能表示至多秩 1 映射",
        "函数类完全相同"
      ],
      "explanation": "瓶颈使矩阵乘积秩至多为 1，而二维恒等矩阵秩为 2。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "4-1-6",
    "chapter": 4,
    "quiz": 1,
    "number": 6,
    "source": "Week4-Quiz1.pdf",
    "en": {
      "stem": "Compare y=W₂W₁x and y=W₂ReLU(W₁x), with input/output in ℝ², hidden width 2, and no biases. Which class represents f(x)=(|x₁|,0) on all of ℝ²?",
      "options": [
        "Both classes.",
        "Only the purely linear network.",
        "Only the ReLU network.",
        "Neither class."
      ],
      "explanation": "A linear network cannot represent the nonlinear absolute value. Two ReLU units suffice because |x₁|=ReLU(x₁)+ReLU(−x₁)."
    },
    "answer": 2,
    "zh": {
      "stem": "输入输出 ℝ²，隐藏宽度 2，无偏置。y=W₂W₁x 与 y=W₂ReLU(W₁x)，哪个能在全域表示 f(x)=(∣x₁∣,0)？",
      "options": [
        "两者都能",
        "仅线性网络",
        "仅 ReLU 网络",
        "两者都不能"
      ],
      "explanation": "绝对值是非线性的；利用 ∣x₁∣=ReLU(x₁)+ReLU(−x₁)，两个隐藏单元即可实现。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "4-1-7",
    "chapter": 4,
    "quiz": 1,
    "number": 7,
    "source": "Week4-Quiz1.pdf",
    "en": {
      "stem": "In the post-activation LayerNorm network shown in the slides, an unrestricted affine layer with a bias immediately follows LayerNorm. How does learning LayerNorm’s gain and bias, rather than fixing them to 1 and 0, affect the function class?",
      "options": [
        "Learning them produces a strictly larger function class.",
        "Fixing them produces a strictly larger function class.",
        "Both classes must equal the class of networks without LayerNorm.",
        "The two function classes are identical in this architecture."
      ],
      "explanation": "Since an unrestricted affine layer with bias follows LayerNorm, its parameters can absorb LayerNorm’s gain and bias. Therefore, whether LayerNorm’s gain and bias are learned or fixed to 1 and 0 does not change the function class. The two function classes are identical."
    },
    "answer": 3,
    "zh": {
      "stem": "激活后 LayerNorm 紧接一个不受限、带偏置的仿射层。学习 LN 的增益和偏置，相比固定为 1 和 0，函数类怎样变化？",
      "options": [
        "学习时严格更大",
        "固定时严格更大",
        "两者都必然等于不加 LN 的函数类",
        "该架构下两者相同"
      ],
      "explanation": "后续仿射层可吸收 LN 的增益与偏置，所以是否单独学习它们不改变此架构的函数类。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "4-1-8",
    "chapter": 4,
    "quiz": 1,
    "number": 8,
    "source": "Week4-Quiz1.pdf",
    "en": {
      "stem": "For LayerNorm, all output features share the input mean and scale. Which statement about its input Jacobian J is generally correct?",
      "options": [
        "J must be diagonal",
        "J must be the identity",
        "Computing Jᵀv always requires forming the full J",
        "An implicit representation can use O(d) storage"
      ],
      "explanation": "The shared statistics couple features, so J is generally not diagonal. Its structured form permits O(d) storage and Jacobian-vector products without a dense matrix."
    },
    "answer": 3,
    "zh": {
      "stem": "LayerNorm 各输出共享输入的均值和尺度。输入 Jacobian J 的一般性质是？",
      "options": [
        "必为对角矩阵",
        "必为恒等矩阵",
        "计算 Jᵀv 必须显式形成 J",
        "隐式表示可用 O(d) 存储"
      ],
      "explanation": "共享统计量使特征耦合，但结构化 Jacobian 可隐式实现矩阵向量积，无需存储 d×d 矩阵。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "4-1-9",
    "chapter": 4,
    "quiz": 1,
    "number": 9,
    "source": "Week4-Quiz1.pdf",
    "en": {
      "stem": "h₁=W₁x, z₁=φ(h₁), ẑ₁=LN(z₁), h₂=W₂ẑ₁. Let D₁=diag(φ′(h₁)) and J₁=∂ẑ₁/∂z₁. Given e₂, how is e₁ computed?",
      "options": [
        "D₁J₁ᵀW₂ᵀe₂",
        "J₁ᵀD₁W₂ᵀe₂",
        "D₁J₁W₂ᵀe₂",
        "J₁D₁W₂ᵀe₂"
      ],
      "explanation": "Apply the chain rule in reverse order: W₂ᵀ, then J₁ᵀ, then D₁. In general these factors cannot be exchanged."
    },
    "answer": 0,
    "zh": {
      "stem": "h₁=W₁x，z₁=φ(h₁)，ẑ₁=LN(z₁)，h₂=W₂ẑ₁。D₁=diag(φ′(h₁))，J₁=∂ẑ₁/∂z₁。给定 e₂，e₁ 如何计算？",
      "options": [
        "D₁J₁ᵀW₂ᵀe₂",
        "J₁ᵀD₁W₂ᵀe₂",
        "D₁J₁W₂ᵀe₂",
        "J₁D₁W₂ᵀe₂"
      ],
      "explanation": "反向按计算链逆序：先 W₂ᵀ，再 J₁ᵀ，最后乘激活导数 D₁。一般不能随意交换这些矩阵。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "4-2-1",
    "chapter": 4,
    "quiz": 2,
    "number": 1,
    "source": "Week4-Quiz2.pdf",
    "en": {
      "stem": "Let H∈ℝ^(d×n), with features in rows and samples in columns. During training, how do standard BN and LN compute statistics?",
      "options": [
        "BN by columns, LN by rows.",
        "Both by rows.",
        "BN by rows, LN by columns.",
        "Both by columns."
      ],
      "explanation": "With rows representing features and columns representing samples, standard BatchNorm computes the mean and standard deviation across samples for each feature (by rows), while LayerNorm computes them across features for each sample (by columns)."
    },
    "answer": 2,
    "zh": {
      "stem": "H∈ℝ^(d×n)，行是特征、列是样本。训练时 BN 与 LN 分别沿何方向计算统计量？",
      "options": [
        "BN 按列、LN 按行",
        "都按行",
        "BN 按行、LN 按列",
        "都按列"
      ],
      "explanation": "BN 对每个特征跨样本统计；LN 对每个样本跨特征统计。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "4-2-2",
    "chapter": 4,
    "quiz": 2,
    "number": 2,
    "source": "Week4-Quiz2.pdf",
    "en": {
      "stem": "A layer has d features and a mini-batch has n samples. How many gains and biases do standard BN and LN each learn?",
      "options": [
        "Both learn d gains and d biases",
        "BN learns d each; LN learns n each",
        "BN learns n each; LN learns d each",
        "Both learn n gains and n biases"
      ],
      "explanation": "Both standard BN and LN learn one gain (γ) and one bias (β) for each feature. Thus, each has as many gains and biases as the number of features; the mini-batch size does not affect the number of affine parameters."
    },
    "answer": 0,
    "zh": {
      "stem": "一层有 d 个特征，一个批量 n 个样本。标准 BN 和 LN 各学习多少个增益、偏置？",
      "options": [
        "两者均 d 个增益、d 个偏置",
        "BN 各 d 个，LN 各 n 个",
        "BN 各 n 个，LN 各 d 个",
        "两者均各 n 个"
      ],
      "explanation": "标准向量 BN/LN 都为每个特征学习 γ、β，参数数量不随批量大小改变。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "4-2-3",
    "chapter": 4,
    "quiz": 2,
    "number": 3,
    "source": "Week4-Quiz2.pdf",
    "en": {
      "stem": "During training, fix the input values of one sample in a layer and the layer parameters, and replace only the other samples in the same mini- batch. Which could happen?",
      "options": [
        "LN output may change, BN output will not change.",
        "Both BN and LN outputs must change.",
        "Both BN and LN outputs must remain unchanged.",
        "BN output may change, LN output remains unchanged."
      ],
      "explanation": "BN computes its statistics using other samples in the same mini-batch, so replacing those samples may change the BN output of the fixed sample. LN computes statistics independently from the current sample, so other samples do not affect its output."
    },
    "answer": 3,
    "zh": {
      "stem": "训练时固定一个样本的输入和层参数，仅替换同批其他样本，会怎样？",
      "options": [
        "LN 输出可能变，BN 不变",
        "二者都必然变",
        "二者都必然不变",
        "BN 可能变，LN 不变"
      ],
      "explanation": "BN 的统计量依赖整个批量；LN 的统计量只依赖当前样本。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "4-2-4",
    "chapter": 4,
    "quiz": 2,
    "number": 4,
    "source": "Week4-Quiz2.pdf",
    "en": {
      "stem": "For the course’s independent single-sample BN inference scheme, weights, γ, and β are fixed. Where do the mean and scale come from?",
      "options": [
        "Statistics of the current test mini-batch.",
        "Batch statistics formed by this test sample alone.",
        "Pre-determined and stored training statistics.",
        "Affine parameters relearned at each inference."
      ],
      "explanation": "In independent single-sample inference, BN uses pre-determined statistics collected and stored during training, such as the running mean and running variance. The network weights and affine parameters remain fixed"
    },
    "answer": 2,
    "zh": {
      "stem": "课程中独立单样本 BN 推理方案，权重、γ、β 固定，均值和尺度来自哪里？",
      "options": [
        "当前测试批量统计",
        "仅该测试样本形成的统计",
        "预先确定并保存的训练统计",
        "每次推理重新学习仿射参数"
      ],
      "explanation": "BN 推理通常使用训练期间记录的运行均值与方差，或用固定最终模型重新估计的统计量。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "4-2-5",
    "chapter": 4,
    "quiz": 2,
    "number": 5,
    "source": "Week4-Quiz2.pdf",
    "en": {
      "stem": "For a vector MLP using current-batch BN on one test sample (n=1, ε>0), what is a feature’s value after the affine step?",
      "options": [
        "The feature’s βᵢ",
        "The feature’s γᵢ",
        "The feature’s original input",
        "Necessarily zero"
      ],
      "explanation": "The batch mean equals the sample, so the normalized value is zero and the affine output is βᵢ. This is the mathematical result; some implementations reject a training-mode batch of one."
    },
    "answer": 0,
    "zh": {
      "stem": "向量 MLP 对单个测试样本直接使用当前批量 BN，n=1、ε>0。仿射变换后某特征的值为？",
      "options": [
        "该特征的 βᵢ",
        "该特征的 γᵢ",
        "原始输入值",
        "必为零"
      ],
      "explanation": "单样本均值等于自身，中心化后为 0，仿射变换结果是 βᵢ。此处是数学计算；某些实现会拒绝单样本训练模式。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "4-2-6",
    "chapter": 4,
    "quiz": 2,
    "number": 6,
    "source": "Week4-Quiz2.pdf",
    "en": {
      "stem": "During training, exponential moving average (EMA) is used to accumulate BN inference statistics. What is one limitation pointed out in the courseware?",
      "options": [
        "It contains only features produced by the final parameters.",
        "It is mixed with features produced by old parameters.",
        "It contains only features produced by test samples.",
        "It always gives all training samples equal weight."
      ],
      "explanation": "During training, the model parameters are continuously updated. Since EMA accumulates BN statistics over time, the resulting statistics are mixed with features produced by old parameters, which may not accurately reflect the feature distribution of the final model"
    },
    "answer": 1,
    "zh": {
      "stem": "训练中用 EMA 累积 BN 推理统计量，讲义指出的局限是？",
      "options": [
        "仅包含最终参数产生的特征",
        "混入旧参数产生的特征",
        "仅包含测试样本产生的特征",
        "总对所有训练样本等权"
      ],
      "explanation": "训练参数持续变化，EMA 混合不同历史模型产生的特征统计，未必准确反映最终模型。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "4-2-7",
    "chapter": 4,
    "quiz": 2,
    "number": 7,
    "source": "Week4-Quiz2.pdf",
    "en": {
      "stem": "Compared with the EMA updated during training, how does PreciseBN obtain inference statistics?",
      "options": [
        "Reuse the EMA statistics accumulated during training.",
        "Fix the final model and recompute statistics over selected training samples.",
        "Fix the final model and recompute statistics over the current test batch.",
        "Restore historical models and recompute statistics over selected training samples."
      ],
      "explanation": "Unlike the EMA accumulated during training, PreciseBN fixes the final model parameters and recomputes the BN statistics using selected training samples. This avoids mixing statistics generated by earlier model parameters."
    },
    "answer": 1,
    "zh": {
      "stem": "相比训练中更新的 EMA，PreciseBN 如何得到推理统计量？",
      "options": [
        "直接复用 EMA",
        "固定最终模型，在选定训练样本上重算",
        "固定最终模型，在当前测试批上重算",
        "恢复历史模型，在训练样本上重算"
      ],
      "explanation": "固定最终模型再统计，避免混入历史参数产生的特征分布。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "4-2-8",
    "chapter": 4,
    "quiz": 2,
    "number": 8,
    "source": "Week4-Quiz2.pdf",
    "en": {
      "stem": "In the same training run, when evaluating with EMA or PreciseBN statistics, the training error is the same curve, but the validation error curves differ. Which option is consistent with this result?",
      "options": [
        "Statistics can affect the validation error curve.",
        "Statistics change the learned weights.",
        "Statistics change the training samples.",
        "Statistics change the validation samples."
      ],
      "explanation": "EMA and PreciseBN change only the BN statistics used during inference. They do not change the learned weights or the training/validation samples. Therefore, different BN statistics can lead to different validation error curves while the training error curve remains the same."
    },
    "answer": 0,
    "zh": {
      "stem": "同次训练，EMA 与 PreciseBN 的训练误差曲线相同而验证误差不同，哪项解释成立？",
      "options": [
        "统计量可影响验证误差",
        "统计量改变已学习权重",
        "统计量改变训练样本",
        "统计量改变验证样本"
      ],
      "explanation": "评估时只切换 BN 统计量，就可能改变推理结果；并未重新训练或修改样本。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "5-1-1",
    "chapter": 5,
    "quiz": 1,
    "number": 1,
    "source": "Week5Quiz1(1).pdf",
    "en": {
      "stem": "WeightNorm represents Wⱼ,:=gⱼVⱼ,:/‖Vⱼ,:‖, Vⱼ,:≠0. Both V and g are learnable. Which statement is correct?",
      "options": [
        "Each weight row has a fixed norm of 1, so training can change only its direction.",
        "Each weight row has norm|gj|, and both its direction and scale can be learned.",
        "Multiplying Vj,: by a positive number scales the corresponding weight row by the same factor.",
        "Multiplying gj by a positive number leaves the weight-row norm unchanged but changes its direction."
      ],
      "explanation": "Dividing V by its norm produces a unit direction, so ‖Wⱼ,:‖=|gⱼ|. Both scale and direction can be learned. Multiplying V by a positive scalar cancels between numerator and denominator."
    },
    "answer": 1,
    "zh": {
      "stem": "WeightNorm 写作 Wⱼ,:=gⱼVⱼ,:/‖Vⱼ,:‖，V 和 g 都可学习。哪项正确？",
      "options": [
        "每行范数固定为 1，只能学方向",
        "每行范数为 ∣gⱼ∣，方向与尺度都可学",
        "V 的一行乘正数，W 同行也同比放大",
        "gⱼ 乘正数只改方向，不改范数"
      ],
      "explanation": "归一化 V 得到单位方向，再乘 g，因此行范数为 ∣gⱼ∣。V 乘正数会在分子分母抵消。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "5-1-2",
    "chapter": 5,
    "quiz": 1,
    "number": 2,
    "source": "Week5Quiz1(1).pdf",
    "en": {
      "stem": "W has at least two distinct positive singular values. What does spectral normalization Ŵ=W/σ_max(W) ensure?",
      "options": [
        "Every unit input vector produces an output vector with norm 1.",
        "Every output feature has variance 1 over the training samples.",
        "The maximum output norm over all unit input vectors is 1.",
        "The ratio of the largest to the smallest positive singular value is 1."
      ],
      "explanation": "The spectral norm is the maximum output norm over unit inputs. Dividing by it makes this maximum 1, but does not make all outputs unit length or change the singular-value ratio."
    },
    "answer": 2,
    "zh": {
      "stem": "W 至少有两个不同的正奇异值，谱归一化 Ŵ=W/σ_max(W) 保证什么？",
      "options": [
        "所有单位输入的输出范数都为 1",
        "训练样本的每个输出特征方差为 1",
        "所有单位输入中，最大输出范数为 1",
        "最大与最小正奇异值之比为 1"
      ],
      "explanation": "谱范数是单位输入下的最大放大倍数。归一化只把最大奇异值设为 1，不改变奇异值之比。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "5-1-3",
    "chapter": 5,
    "quiz": 1,
    "number": 3,
    "source": "Week5Quiz1(1).pdf",
    "en": {
      "stem": "Oversized Gradient-Descent Step A positive-definite quadratic objective has a Hessian with maximum and minimum eigenvaluesL and µ, where L> 2µ. The initial errorw0−w∗has a nonzero component along an eigenvector forL. Starting fromw0, gradient descent uses step size1/µ. How does this error component change?",
      "options": [
        "It grows in magnitude.",
        "It is eliminated in the first update.",
        "It decreases.",
        "It changes as it would with step size1/L."
      ],
      "explanation": "In the direction with eigenvalueL, the error is multiplied by1−L/µ after each update. BecauseL> 2µ, this number is less than−1. The sign changes at every step, and the size of the error increases. Thus the errorgrows in magnitude(A). It does not disappear (B) or decrease (C). With step size 1/L, the multiplier would instead be zero, so D is also wrong."
    },
    "answer": 0,
    "zh": {
      "stem": "正定二次目标 Hessian 最大、最小特征值 L、μ 满足 L>2μ。初始误差在 L 方向非零，步长取 1/μ。该分量怎样变化？",
      "options": [
        "幅度增大",
        "第一步消失",
        "减小",
        "与步长 1/L 时相同"
      ],
      "explanation": "该方向每步乘 1−L/μ<−1，因此符号交替、幅度增大。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "5-1-4",
    "chapter": 5,
    "quiz": 1,
    "number": 4,
    "source": "Week5Quiz1(1).pdf",
    "en": {
      "stem": "Scaling an Objective and Its Step Size Let F be a positive-definite quadratic objective whose Hessian has maximum eigenvalueL. DefineG(w) =cF(w), where 0<c< 1. Two gradient-descent runs start from the samew0: the run onF uses step size1/L, and the run on G uses step size1/(cL). Assume exact arithmetic. How are the parameter sequences related?",
      "options": [
        "They are identical because scaling the gradient and the step size cancels out.",
        "The run onG moves farther at every step because it uses a larger step size.",
        "The run onG moves less at every step because its gradient has smaller magnitude.",
        "The first steps are identical, but the trajectories diverge after the gradients are recomputed."
      ],
      "explanation": "ScalingF byc scales its gradient byc:∇G(w) =c∇F(w). But the step size onG is 1/c times the step size onF. These changes cancel:w−1 cL∇G(w) = w−1 L∇F(w). The update is the same at every step. Therefore the parameter sequences areidentical because scaling the gradient and the step size cancels out(A). B considers only the larger step size; C considers only the smaller gradient; D misses that the cancellation continues after the first step."
    },
    "answer": 0,
    "zh": {
      "stem": "正定二次目标 F 的最大曲率为 L，G=cF，0<c<1。从同一点开始，F 用步长 1/L，G 用 1/(cL)，精确运算下轨迹关系是？",
      "options": [
        "完全相同，梯度和步长缩放抵消",
        "G 每步更远",
        "G 每步更近",
        "只有第一步相同，之后分离"
      ],
      "explanation": "∇G=c∇F，所以 (1/(cL))∇G=(1/L)∇F，每一步都完全相同。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "5-1-5",
    "chapter": 5,
    "quiz": 1,
    "number": 5,
    "source": "Week5Quiz1(1).pdf",
    "en": {
      "stem": "F(w)=½wᵀQw, where Q is positive semidefinite with both positive and zero eigenvalues. GD uses 1/λ_max(Q). What happens to a nonzero initial component in a zero-eigenvalue direction?",
      "options": [
        "The objective cannot reach its minimum unless this component becomes zero.",
        "This component gradually decays, with a decay factor closer to 1 than those of the other components.",
        "Because the ratio of the maximum to minimum eigenvalue is infinite, this component grows.",
        "This component remains unchanged during the iterations but does not affect the objective value."
      ],
      "explanation": "In a zero-eigenvalue direction the gradient is zero and the update multiplier is 1. The component stays unchanged and contributes nothing to the objective."
    },
    "answer": 3,
    "zh": {
      "stem": "F(w)=½wᵀQw，Q 半正定，既有正也有零特征值。步长 1/λ_max(Q)。初始零特征值方向分量非零，它会怎样？",
      "options": [
        "必须变零才能达到最小损失",
        "逐渐衰减",
        "由于条件数无穷而增长",
        "保持不变，但不影响目标值"
      ],
      "explanation": "该方向梯度为零，更新因子为 1；目标也不依赖这个分量。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "5-1-6",
    "chapter": 5,
    "quiz": 1,
    "number": 6,
    "source": "Week5Quiz1(1).pdf",
    "en": {
      "stem": "Objective Gap Versus Parameter Error A positive-definite quadratic objective has a small positive Hessian eigenvalueµ. In an orthonormal eigenvector basis, leteµbe the component ofw−w∗in that direction. Its current contribution to the objective gap is less than ε/2. The other components contribute less thanε/2 in total. If the stopping criterion isF(w)−F∗< ε, which statement is correct?",
      "options": [
        "Stopping requireseµ<ε.",
        "The stopping criterion is met, even ifeµis still large.",
        "At higher accuracy, theµdirection can be treated as a zero-eigenvalue direction.",
        "Meeting the stopping criterion proves thatµwas estimated incorrectly."
      ],
      "explanation": "The two contributions are each below ε/2, so their sum is below ε. Small positive curvature allows a large parameter error to make only a small loss contribution; small is not the same as zero."
    },
    "answer": 1,
    "zh": {
      "stem": "正定二次目标有很小正特征值 μ，该方向误差 e_μ 对目标差贡献小于 ε/2，其他方向总贡献也小于 ε/2。对停止条件 F(w)−F*<ε，哪项正确？",
      "options": [
        "还要求 e_μ<ε",
        "即使 e_μ 较大，也满足停止条件",
        "更高精度时可把 μ 当零",
        "满足停止条件说明 μ 估计错了"
      ],
      "explanation": "相加可得目标差小于 ε。曲率很小意味着参数误差较大时，损失贡献仍可能很小。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "5-1-7",
    "chapter": 5,
    "quiz": 1,
    "number": 7,
    "source": "Week5Quiz1(1).pdf",
    "en": {
      "stem": "Convergence Bound Versus Actual Iterations Two gradient-descent runs optimize the same positive-definite quadratic objective. They use the same step size but start from different nonoptimal points. Both aim to reduceF (w)−F∗to 10% of their own initial value. A condition-number-based convergence bound gives the same iteration-count upper bound for both runs. Which statement is correct?",
      "options": [
        "The runs have the same condition number, so their actual iteration counts are equal.",
        "The run with the larger initial objective gap takes more iterations.",
        "A run that takes fewer iterations than the bound violates its conditions.",
        "Their initial errors may differ across eigen-directions, so their actual iteration counts may differ."
      ],
      "explanation": "The bound gives a number of steps that isenough to reach the target; it does not predict the exact number of steps for each start. To see why, take the exampleQ = diag(L,µ), where 0<µ≪L, and step size1/L. The first coordinate becomes zero after one update. The second coordinate is multiplied by1−µ/L, a number close to 1, so it decreases slowly. A run starting with error only in the first coordinate can finish in one step. A run starting with error only in the second coordinate may need many more steps to reduce its own objective gap to 10%. Theiractual iteration counts may differ(D), even though the theoretical upper bound is the same. Thus A and B do not follow. Finishing sooner than an upper bound is allowed, so C is wrong."
    },
    "answer": 3,
    "zh": {
      "stem": "同一正定二次目标、同一步长、不同初始点，均要求目标差降到各自初值的 10%。条件数上界相同，说明什么？",
      "options": [
        "实际步数必相同",
        "初始目标差更大者必更慢",
        "少于上界即违反条件",
        "各特征方向初始误差不同，实际步数可不同"
      ],
      "explanation": "收敛界是足够步数的上界，不是精确预测。初始误差是否落在慢方向影响实际速度。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "5-1-8",
    "chapter": 5,
    "quiz": 1,
    "number": 8,
    "source": "Week5Quiz1(1).pdf",
    "en": {
      "stem": "For a differentiable L-smooth lower-bounded F, GD guarantees min_(0≤r≤T)‖∇F(w_r)‖≤ε. What follows from this alone?",
      "options": [
        "The objective gap at the final iterate is at mostε.",
        "The gradient norm is at mostεat every iterate up to iterationT.",
        "At least one iterate up to iterationT has gradient norm at mostε.",
        "At least one iterate up to iterationT is a local minimum."
      ],
      "explanation": "At least one iterate has gradient norm at most ε. This says nothing by itself about every iterate, the final objective gap, or whether the point is a local minimum."
    },
    "answer": 2,
    "zh": {
      "stem": "已知 min_(0≤r≤T)‖∇F(w_r)‖≤ε，仅凭此式能推出什么？",
      "options": [
        "最终目标差≤ε",
        "截至 T 的每一步梯度都≤ε",
        "截至 T 至少一步梯度范数≤ε",
        "截至 T 至少一点是局部最小值"
      ],
      "explanation": "最小值的上界只保证至少一个迭代满足小梯度，不保证每一步、最后一步或局部极小。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "5-1-9",
    "chapter": 5,
    "quiz": 1,
    "number": 9,
    "source": "Week5Quiz1(1).pdf",
    "en": {
      "stem": "F is twice continuously differentiable but not necessarily convex. At w̄, ∇F(w̄)=0 and ∇²F(w̄)≻0. What follows?",
      "options": [
        "The Hessian is positive definite at this point, so¯w is a global minimum.",
        "The Hessian is positive definite at this point, soF is strongly convex over the entire space.",
        "¯w is a strict local minimum, although other regions may have lower function values.",
        "¯w is a strict local minimum only ifF ( ¯w) = 0."
      ],
      "explanation": "The second-order sufficient condition gives a strict local minimum. Other regions may have lower values; this is not a global convexity statement."
    },
    "answer": 2,
    "zh": {
      "stem": "F 二阶连续可微、不一定凸，∇F(w̄)=0 且 ∇²F(w̄)≻0。可推出？",
      "options": [
        "w̄ 是全局最小点",
        "F 在整个空间强凸",
        "w̄ 是严格局部最小点，但别处可能更低",
        "仅当 F(w̄)=0 才是严格局部最小点"
      ],
      "explanation": "二阶充分条件只描述邻域，不能排除别处更低的函数值。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "5-1-10",
    "chapter": 5,
    "quiz": 1,
    "number": 10,
    "source": "Week5Quiz1(1).pdf",
    "en": {
      "stem": "F_b(w)=½wᵀQw+bᵀw, with fixed positive-definite Q and step α=1/λ_max(Q). When b changes, which quantity remains unchanged?",
      "options": [
        "The update matrixI−αQacting on the errorwr−w∗ b.",
        "The location of the minimizerw∗ b in parameter space.",
        "The gradient evaluated at any fixed parameter vectorw.",
        "The number of updates from any fixedw0 required to reduce the difference between the objective value and its minimum to a given threshold."
      ],
      "explanation": "The minimizer is w*_b=−Q⁻¹b, but subtracting it from the GD update yields e_(r+1)=(I−αQ)e_r. That matrix depends only on Q and α."
    },
    "answer": 0,
    "zh": {
      "stem": "F_b(w)=½wᵀQw+bᵀw，Q 固定正定，α=1/λ_max(Q)。只改变 b，哪项不变？",
      "options": [
        "误差更新矩阵 I−αQ",
        "最优点位置",
        "固定 w 处梯度",
        "固定初始点达到指定目标差的步数"
      ],
      "explanation": "最优点 w*_b=−Q⁻¹b 会变，但误差递推 e_(r+1)=(I−αQ)e_r 的矩阵不变。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "5-1-11",
    "chapter": 5,
    "quiz": 1,
    "number": 11,
    "source": "Week5Quiz1(1).pdf",
    "en": {
      "stem": "E_r/E₀≤q^r, where E_r=F(w_r)−F*, E₀>0 and 0<q<1. Each new relative-error threshold is one tenth of the previous threshold. How can the iteration count be increased?",
      "options": [
        "The total number of iterations must be multiplied by 10 each time.",
        "The number of additional iterations must increase each time.",
        "The step size must be reduced before adding iterations each time.",
        "The same number of additional iterations can be added each time."
      ],
      "explanation": "Add k=ceil(ln(0.1)/ln(q)) steps each time. Then q^k≤0.1, reducing the bound tenfold. This is a sufficient count, not an exact prediction."
    },
    "answer": 3,
    "zh": {
      "stem": "目标差界 E_r/E₀≤q^r，0<q<1。相对误差阈值每次缩小为十分之一，怎样增加迭代次数即可满足新要求？",
      "options": [
        "总次数每次乘 10",
        "追加次数每次必须更多",
        "追加前必须减小步长",
        "每次追加相同数量的迭代即可"
      ],
      "explanation": "取 k=⌈ln(0.1)/ln(q)⌉，有 q^k≤0.1；每次增加 k 步即可使上界再缩小十倍。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "5-2-1",
    "chapter": 5,
    "quiz": 2,
    "number": 1,
    "source": "Week5Quiz2(1).pdf",
    "en": {
      "stem": "Feature Scaling and Convergence In univariate linear least-squares regression (with intercept), after multiplying the input feature by a nonzero constant, gradient descent converges faster. Both runs use their respectiveα= 1 /L, whereL is the largest eigenvalue of the Hessian. Which item may explain this acceleration?",
      "options": [
        "The model can represent more lines, so it approaches the optimum faster.",
        "The minimum training loss is somewhat lower, so it approaches the optimum faster.",
        "The condition number of the Hessian decreases, improving the convergence bound of the error.",
        "The objective function changes from nonconvex to convex, so it avoids suboptimal minima."
      ],
      "explanation": "Nonzero feature scaling can be compensated for by the regression coefficients; the representable prediction functions and the optimal loss remain unchanged. The condition number of the Hessian may change, thereby affecting the contraction rate. The question asks for a possible explanation and does not equate the observed acceleration with a necessary improvement in the condition number. A mistakes coordinate scaling for model expansion.B mistakes finite-step training improvement for a reduction in the optimal loss.D ignores that both the pre- and post-scaling problems are convex least-squares problems. (Slide 41-48, 57)"
    },
    "answer": 2,
    "zh": {
      "stem": "带截距一元最小二乘，输入特征乘非零常数后 GD 更快，两次各用步长 1/L。哪项可能解释加速？",
      "options": [
        "模型可表示更多直线",
        "最低训练损失降低",
        "Hessian 条件数降低，收敛界改善",
        "非凸问题变凸，避开坏极小值"
      ],
      "explanation": "非零缩放可以被回归系数抵消，函数类与最优损失不变；但参数坐标下曲率和条件数可能改善。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "5-2-2",
    "chapter": 5,
    "quiz": 2,
    "number": 2,
    "source": "Week5Quiz2(1).pdf",
    "en": {
      "stem": "Small Loss Changes and Accuracy Run gradient descent on a convex quadratic objective whose optimal valueF ⋆ is known, hoping to achieve F (w)−F ⋆≤ε(ε>0).If the loss changes over several consecutive steps are all very small, can this phenomenon alone determine that this precision has been reached?",
      "options": [
        "No; one also needs to compare the difference between the current objective value and the optimal value.",
        "Yes; the loss between adjacent iterations has almost stopped changing.",
        "No; one also needs to confirm that all components of the gradient are exactly zero.",
        "Yes; a convex quadratic objective has no suboptimal local minima."
      ],
      "explanation": "The question requires determining whetherF (w)−F ⋆≤ε(ε >0), not whether the loss curve is flat. When progress is extremely slow, adjacent loss changes may also be very small; only by comparing the objective gap can this accuracy requirement be directly verified.B mistakes a single-step change for the objective gap.C replaces a finite-precision requirement with an exact stationary-point requirement. D, while correctly describing convexity, cannot prove that the current point is sufficiently close to optimal.(Slide 44–46)"
    },
    "answer": 0,
    "zh": {
      "stem": "凸二次目标最优值 F* 已知，要求 F(w)−F*≤ε。连续几步损失变化很小，能否单凭此判断达标？",
      "options": [
        "不能，还需比较当前值与最优值之差",
        "能，损失基本不变",
        "不能，还需梯度所有分量严格为零",
        "能，凸函数没有坏局部最小值"
      ],
      "explanation": "进展缓慢也会导致曲线很平。精度要求针对目标差，不是相邻步差，也不要求梯度恰好为零。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "5-2-3",
    "chapter": 5,
    "quiz": 2,
    "number": 3,
    "source": "Week5Quiz2(1).pdf",
    "en": {
      "stem": "For F(w)=½‖Xᵀw−y‖², X has full row rank. Normalize each row to unit norm to obtain X̂. The Hessian X̂X̂ᵀ has all diagonal entries 1 but a large condition number. Why?",
      "options": [
        "Equal diagonal entries imply equal eigenvalues, so the reported condition number is wrong.",
        "Different feature rows may still be highly collinear, thereby producing very small positive eigenvalues.",
        "Full row rank produces zero eigenvalues, and these zero eigenvalues cause the large condition number.",
        "Row normalization only changes the gradient magnitude and does not change the Hessian of the least-squares problem."
      ],
      "explanation": "Unit row norms fix diagonal entries, not eigenvalues. Highly correlated rows can still produce small positive eigenvalues; full row rank excludes exact zero eigenvalues."
    },
    "answer": 1,
    "zh": {
      "stem": "F(w)=½‖Xᵀw−y‖²，X 满行秩。各行除以范数后 Hessian 对角均为 1，但条件数仍很大。合理解释是？",
      "options": [
        "对角相等说明特征值相等，报告错误",
        "特征行仍可能高度共线，造成很小的正特征值",
        "满行秩产生零特征值",
        "行归一化不改变 Hessian"
      ],
      "explanation": "单位行范数不意味着行之间正交。高度相关会导致小正特征值，因而条件数大。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "5-2-4",
    "chapter": 5,
    "quiz": 2,
    "number": 4,
    "source": "Week5Quiz2(1).pdf",
    "en": {
      "stem": "Let F(W₁,W₂)=‖Y−W₂φ(W₁X)‖²_F. Fix Z=φ(W₁X) and optimize only W₂. Which Hessian statement is correct?",
      "options": [
        "For each output row, the Hessian block is 2ZZᵀ",
        "It is 2XXᵀ; hidden features do not affect curvature",
        "It depends on W₂ and the reduced problem remains nonconvex",
        "None of the above"
      ],
      "explanation": "The reduced problem is convex quadratic in W₂. Each row has Hessian 2ZZᵀ; the full vectorized Hessian includes a Kronecker identity structure."
    },
    "answer": 0,
    "zh": {
      "stem": "F(W₁,W₂)=‖Y−W₂φ(W₁X)‖²_F，固定 Z=φ(W₁X)，只优化 W₂。关于 Hessian 哪项正确？",
      "options": [
        "每个输出行对应的 Hessian 块是 2ZZᵀ",
        "Hessian 是 2XXᵀ，隐藏特征不影响曲率",
        "Hessian 依赖当前 W₂，固定特征后仍非凸",
        "以上都不正确"
      ],
      "explanation": "固定 Z 后是关于 W₂ 的凸二次最小二乘。每行对应 2ZZᵀ；完整向量化 Hessian 还带恒等矩阵的 Kronecker 结构。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "5-2-5",
    "chapter": 5,
    "quiz": 2,
    "number": 5,
    "source": "Week5Quiz2(1).pdf",
    "en": {
      "stem": "For house-price regression F(w)=½‖Xᵀw−y‖², only y is rescaled to 10⁻⁶y. Both GD runs start at zero with the same positive step size. How does the Hessian compare?",
      "options": [
        "It becomes 10⁻¹² times the original",
        "It becomes 10⁻⁶ times the original",
        "It is unchanged",
        "It becomes 10⁶ times the original"
      ],
      "explanation": "The Hessian is XXᵀ and does not depend on y. Rescaling targets changes the linear and constant terms, not the quadratic term."
    },
    "answer": 2,
    "zh": {
      "stem": "房价回归 F(w)=½‖Xᵀw−y‖²，仅将价格 y 改为 10⁻⁶y。零初始化、同正步长、相同步数。Hessian 怎样变化？",
      "options": [
        "变为原来的 10⁻¹²",
        "变为原来的 10⁻⁶",
        "不变",
        "变为原来的 10⁶"
      ],
      "explanation": "Hessian=XXᵀ，与标签 y 无关；标签缩放只改变一次项和常数项。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "5-2-6",
    "chapter": 5,
    "quiz": 2,
    "number": 6,
    "source": "Week5Quiz2(1).pdf",
    "en": {
      "stem": "F*>0. From the same initial point, A stops at F(w_t)≤0.1F(w₀), while B stops at F(w_t)−F*≤0.1[F(w₀)−F*]. Assuming both are achievable, which is correct?",
      "options": [
        "Run A is more stringent, because the residual objective gap it allows is smaller.",
        "Run B is more stringent, because it subtracts the optimal loss in the comparison.",
        "The two are equally stringent, because both compared quantities are reduced to 10% of their initial values.",
        "They cannot yet be compared, because the specific value of the optimal loss is still missing."
      ],
      "explanation": "A allows a residual gap of 0.1F₀−F*, while B allows 0.1F₀−0.1F*. A is stricter by 0.9F*>0."
    },
    "answer": 0,
    "zh": {
      "stem": "F*>0，同一起点。A 在 F(w_t)≤0.1F(w₀) 停止；B 在 F(w_t)−F*≤0.1[F(w₀)−F*] 停止。假设都可达到，哪项正确？",
      "options": [
        "A 更严格，允许的剩余目标差更小",
        "B 更严格，因为减去了最优值",
        "二者都降至 10%，一样严格",
        "不知道 F* 具体值不能比较"
      ],
      "explanation": "A 允许的目标差是 0.1F₀−F*，B 是 0.1F₀−0.1F*，A 比 B 小 0.9F*>0。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "6-1-1",
    "chapter": 6,
    "quiz": 1,
    "number": 1,
    "source": "week6-quiz1.pdf",
    "en": {
      "stem": "Sampling Rules and Repetition Which SGD sampling rule can select the same sample twice before all samples have been seen?",
      "options": [
        "Cyclic order.",
        "Random permutation.",
        "Independent random sampling.",
        "All three rules."
      ],
      "explanation": "Each sample is drawn independently from the full dataset, so a sample may be selected more than once before all samples have been seen. A is incorrect because cyclic order visits each sample once per pass; B is incorrect because random permutation shuffles the samples without repetition within a pass; D is incorrect because only independent random sampling allows repeated selection before all samples have been seen."
    },
    "answer": 2,
    "zh": {
      "stem": "哪种 SGD 抽样规则允许尚未见完所有样本，就重复抽到同一个？",
      "options": [
        "循环顺序",
        "随机排列",
        "独立随机抽样",
        "三者都允许"
      ],
      "explanation": "独立抽样每次都从全数据集中抽取，可重复；循环与随机排列在一遍内各访问一次。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "6-1-2",
    "chapter": 6,
    "quiz": 1,
    "number": 2,
    "source": "week6-quiz1.pdf",
    "en": {
      "stem": "Constant Stepsize Near an Optimum With a constant stepsize and persistent gradient noise, what typically happens after SGD gets close to an optimum?",
      "options": [
        "Its iterates continue to fluctuate near the optimum.",
        "Its iterates stop moving after one epoch.",
        "Each subsequent step decreases the loss.",
        "Its stochastic gradients become full gradients."
      ],
      "explanation": "Even when SGD approaches an optimum, a constant learning rate and persistent gradient noise cause parameter updates to continue fluctuating around the optimum rather than converging exactly to it. B is incorrect because SGD does not automatically stop updating after one epoch; C is incorrect because stochastic updates may increase the loss, so it is not guaranteed to decrease at every step; D is incorrect because stochastic gradients, computed from individual samples or mini-batches, do not automatically become full gradients computed using the entire dataset."
    },
    "answer": 0,
    "zh": {
      "stem": "固定步长且梯度噪声持续存在，SGD 接近最优点后通常怎样？",
      "options": [
        "继续在最优点附近波动",
        "一轮后停止更新",
        "之后每一步都降低损失",
        "随机梯度变成全梯度"
      ],
      "explanation": "噪声使更新无法完全静止，固定步长常导致邻域内波动，而不是精确收敛。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "6-1-3",
    "chapter": 6,
    "quiz": 1,
    "number": 3,
    "source": "week6-quiz1.pdf",
    "en": {
      "stem": "Nonconvex SGD Convergence Suppose the smoothness, gradient-bound, and diminishing-stepsize conditions for nonconvex SGD convergence hold. What does the result establish?",
      "options": [
        "The iterates reach a global minimizer.",
        "Every individual step decreases the loss.",
        "The gradient of the full objective approaches zero.",
        "SGD reaches a stationary point after finitely many updates."
      ],
      "explanation": "Under conditions such as smoothness, bounded gradients, and diminishing step sizes, convergence results for nonconvex SGD typically establish convergence toward a stationary point, where the gradient norm approaches zero, but do not guarantee global optimality. A is incorrect because nonconvex objectives may have multiple local minima and saddle points; B is incorrect because stochastic updates do not guarantee a loss decrease at every step; D is incorrect because asymptotic convergence does not imply reaching a stationary point in finitely many updates."
    },
    "answer": 2,
    "zh": {
      "stem": "满足非凸 SGD 收敛的光滑性、梯度界和衰减步长条件，结论通常建立什么？",
      "options": [
        "到达全局最小点",
        "每一步降低损失",
        "完整目标的梯度趋近零",
        "有限步到达驻点"
      ],
      "explanation": "结论通常针对梯度范数以定理规定的意义趋于零，而非全局最优、逐步下降或有限步精确到达。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "6-1-4",
    "chapter": 6,
    "quiz": 1,
    "number": 4,
    "source": "week6-quiz1.pdf",
    "en": {
      "stem": "Why SGD Can Be Faster Why can SGD be faster than GD in the fast zone?",
      "options": [
        "The lower cost per update outweighs the effect of an inexact gradient.",
        "Its newer gradients are exact, so each update makes more progress.",
        "Shuffling makes every mini-batch gradient equal to the full gradient.",
        "A constant stepsize removes gradient noise after enough updates."
      ],
      "explanation": "In the fast zone, SGD computes gradients using individual samples or mini-batches, making each update cheaper than GD, which uses the full dataset. Although SGD uses noisy gradient estimates, its lower computational cost per update can allow it to reach a target accuracy faster. B is incorrect because SGD still uses stochastic gradient estimates, not exact gradients; C is incorrect because shuffling does not make every mini-batch gradient equal to the full gradient; D is incorrect because a constant stepsize does not eliminate gradient noise."
    },
    "answer": 0,
    "zh": {
      "stem": "为什么 SGD 在快速区可能比 GD 更快？",
      "options": [
        "每步成本更低，抵消梯度不精确的影响",
        "新梯度精确，每步进展更多",
        "打乱顺序让每批梯度等于全梯度",
        "固定步长最终去掉噪声"
      ],
      "explanation": "SGD 用单样本或小批量求梯度，计算更便宜，因此按计算时间衡量可能更快。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "6-1-5",
    "chapter": 6,
    "quiz": 1,
    "number": 5,
    "source": "week6-quiz1.pdf",
    "en": {
      "stem": "Sequential Updates Within One Pass Why might sequential SGD make more progress than GD in one pass through the same data?",
      "options": [
        "It uses fewer sample-gradient computations.",
        "Later gradients reflect parameter changes made earlier in the pass.",
        "Each gradient is an exact full-data gradient.",
        "Every individual update reduces the total loss."
      ],
      "explanation": "Sequential SGD updates parameters after processing each sample, so subsequent gradients are computed using the updated parameters and can adapt to earlier changes, potentially making more progress than GD in one pass through the same data. A is incorrect because both methods typically process all samples in one pass; C is incorrect because SGD uses individual-sample gradients rather than full-data gradients; D is incorrect because an individual stochastic update does not guarantee a reduction in the total loss."
    },
    "answer": 1,
    "zh": {
      "stem": "在同一遍数据中，顺序 SGD 为什么可能比 GD 进展更多？",
      "options": [
        "计算的样本梯度更少",
        "后续梯度反映本轮前面步骤更新过的参数",
        "每个梯度都是全梯度",
        "每个更新都降低总损失"
      ],
      "explanation": "SGD 边看样本边更新，后面的梯度在新参数处计算；这是可能的优势，不是无条件保证。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "6-1-6",
    "chapter": 6,
    "quiz": 1,
    "number": 6,
    "source": "week6-quiz1.pdf",
    "en": {
      "stem": "From the Fast Zone to the Confusion Zone What causes constant-stepsize SGD to leave the fast zone and enter the confusion zone?",
      "options": [
        "The sample order changes from shuffled to cyclic.",
        "Gradient noise begins to dominate the useful progress.",
        "The stepsize gradually decreases toward zero.",
        "Each mini-batch gradient becomes the full gradient."
      ],
      "explanation": "In the fast zone, SGD approaches the optimum efficiently. However, with a constant stepsize, gradient noise does not automatically disappear. As the useful progress diminishes, noise can outweigh the optimization progress, causing the iterates to fluctuate around the optimum and enter the confusion zone. A is incorrect because changing the sample order is not the fundamental cause; C is incorrect because the stepsize is constant; D is incorrect because mini-batch gradients do not automatically become full gradients."
    },
    "answer": 1,
    "zh": {
      "stem": "固定步长 SGD 从快速区进入混乱区的原因是？",
      "options": [
        "样本顺序从随机变循环",
        "梯度噪声开始主导有效进展",
        "步长逐渐趋于零",
        "每个小批量梯度变为全梯度"
      ],
      "explanation": "接近最优点时有用信号变小，噪声仍在，因此波动可能压过优化进展。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "6-2-1",
    "chapter": 6,
    "quiz": 2,
    "number": 1,
    "source": "week6-quiz2.pdf",
    "en": {
      "stem": "From the Fast Zone to the Confusion Zone What description is valid, when constant-stepsize SGD leaves the fast zone and enters the confusion zone?",
      "options": [
        "The sample order changes from shuffled to cyclic.",
        "Gradient noise begins to dominate the useful progress.",
        "The stepsize gradually decreases toward zero.",
        "Each mini-batch gradient becomes the full gradient."
      ],
      "explanation": "As constant-stepsize SGD approaches the optimum, useful progress diminishes while stochastic gradient noise persists, causing the iterates to fluctuate around the optimum and enter the confusion zone. A is incorrect because changing the sample order is not the fundamental cause; C is incorrect because the stepsize remains constant; D is incorrect because a mini-batch gradient is not generally equal to the full-data gradient."
    },
    "answer": 1,
    "zh": {
      "stem": "固定步长 SGD 从快速区进入混乱区，哪项描述正确？",
      "options": [
        "样本顺序从随机变循环",
        "梯度噪声开始主导有效进展",
        "步长逐渐趋于零",
        "小批量梯度变为全梯度"
      ],
      "explanation": "固定步长不会自动消除噪声。随着有效进展减弱，噪声主导更新。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "6-2-2",
    "chapter": 6,
    "quiz": 2,
    "number": 2,
    "source": "week6-quiz2.pdf",
    "en": {
      "stem": "What Different SGD Methods Average What is averaged in averaged SGD (ASGD) and in SGD with momentum, respectively?",
      "options": [
        "Parameters in ASGD; gradients in momentum.",
        "Gradients in ASGD; parameters in momentum.",
        "Squared gradients in ASGD; parameters in momentum.",
        "Parameters in ASGD; squared gradients in momentum."
      ],
      "explanation": "ASGD averages model parameters across iterations to reduce fluctuations and improve stability, whereas momentum SGD accumulates an exponentially weighted average of past gradients to smooth update directions and reduce oscillations. B is incorrect because the two averaging targets are reversed; C is incorrect because ASGD averages parameters, not squared gradients; D is incorrect because standard momentum SGD accumulates gradients, not squared gradients."
    },
    "answer": 0,
    "zh": {
      "stem": "ASGD 和带动量 SGD 分别对什么做平均？",
      "options": [
        "ASGD 平均参数；动量平均梯度",
        "ASGD 平均梯度；动量平均参数",
        "ASGD 平均梯度平方；动量平均参数",
        "ASGD 平均参数；动量平均梯度平方"
      ],
      "explanation": "ASGD 对迭代参数平均以减少波动；标准动量累积历史梯度的加权平均，平滑方向。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "6-2-3",
    "chapter": 6,
    "quiz": 2,
    "number": 3,
    "source": "week6-quiz2.pdf",
    "en": {
      "stem": "Coordinatewise Adaptation in AdaGrad In AdaGrad, two coordinates have the same current gradient magnitude. Which coordinate receives the smaller update magnitude, with the same base learning rate?",
      "options": [
        "The one with the smaller parameter value.",
        "The one with the smaller accumulated squared gradient.",
        "Both receive the same update magnitude.",
        "The one with the larger accumulated squared gradient."
      ],
      "explanation": "AdaGrad adapts the learning rate for each coordinate using its accumulated squared gradients. A larger accumulated squared gradient produces a smaller effective learning rate. Therefore, with equal current gradient magnitudes and the same base learning rate, that coordinate receives a smaller update. A is incorrect because the parameter value does not directly determine the update magnitude; B is incorrect because a smaller accumulated squared gradient yields a larger effective learning rate; C is incorrect because different accumulated squared gradients can produce different update magnitudes."
    },
    "answer": 3,
    "zh": {
      "stem": "AdaGrad 两个坐标当前梯度幅度相同、基础学习率相同，哪个更新较小？",
      "options": [
        "参数值较小的",
        "累积梯度平方较小的",
        "两者相同",
        "累积梯度平方较大的"
      ],
      "explanation": "有效步长约为 η/√(Σ历史梯度²+ε)。累积量越大，分母越大，更新越小。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "6-2-4",
    "chapter": 6,
    "quiz": 2,
    "number": 4,
    "source": "week6-quiz2.pdf",
    "en": {
      "stem": "What RMSProp Tracks Unlike AdaGrad's cumulative sum, which quantity does RMSProp track with an exponential moving average?",
      "options": [
        "Past parameter values.",
        "Past gradient values.",
        "Past squared gradients.",
        "Past absolute gradients."
      ],
      "explanation": "RMSProp tracks an exponential moving average of squared gradients to adapt the effective learning rate for each parameter, avoiding the continual learning-rate decay caused by AdaGrad's cumulative sum. A is incorrect because RMSProp does not track parameter values; B is incorrect because it tracks squared gradients, not raw gradients; D is incorrect because it does not track absolute gradients."
    },
    "answer": 2,
    "zh": {
      "stem": "不同于 AdaGrad 累加，RMSProp 对什么做指数移动平均？",
      "options": [
        "历史参数",
        "历史梯度",
        "历史梯度平方",
        "历史梯度绝对值"
      ],
      "explanation": "RMSProp 用梯度平方的 EMA 调节逐坐标尺度，避免累计平方无限增长导致的持续步长收缩。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "6-2-5",
    "chapter": 6,
    "quiz": 2,
    "number": 5,
    "source": "week6-quiz2.pdf",
    "en": {
      "stem": "Adam's Two Moments Which pair of quantities does Adam maintain as exponential moving averages?",
      "options": [
        "Parameters and squared parameters.",
        "Gradients and squared gradients.",
        "Gradients and learning rates.",
        "Parameters and gradients."
      ],
      "explanation": "Adam maintains two exponential moving averages: the first moment, which averages gradients to guide the update direction, and the second moment, which averages squared gradients to adapt the effective learning rate. A is incorrect because Adam does not average parameters and squared parameters; C is incorrect because it averages gradients and squared gradients, not gradients and learning rates; D is incorrect because neither moving average tracks the parameters themselves."
    },
    "answer": 1,
    "zh": {
      "stem": "Adam 维护哪两类指数移动平均？",
      "options": [
        "参数与参数平方",
        "梯度与梯度平方",
        "梯度与学习率",
        "参数与梯度"
      ],
      "explanation": "一阶矩跟踪梯度方向，二阶原始矩跟踪梯度平方；通常还进行偏差修正。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "6-2-6",
    "chapter": 6,
    "quiz": 2,
    "number": 6,
    "source": "week6-quiz2.pdf",
    "en": {
      "stem": "Why Use a Learning Rate Scheduler What is a possible reason that we need a learning rate scheduler, from the SGD perspective?",
      "options": [
        "A fixed-rate SGD can only enter an O(η) neighborhood in some settings; decay may help reach a lower loss.",
        "A fixed-rate SGD will diverge.",
        "A fixed-rate SGD eventually reaches the exact optimum; decay only reduces computation.",
        "With a fixed rate, the loss never decreases during training."
      ],
      "explanation": "With a fixed learning rate, stochastic gradient noise can cause SGD to fluctuate around the optimum, limiting further convergence. Gradually reducing the learning rate can mitigate this effect and help achieve a lower loss. B is incorrect because a fixed learning rate does not necessarily cause divergence; C is incorrect because a fixed learning rate does not generally guarantee exact convergence, and scheduling is not merely for reducing computation; D is incorrect because the loss can still decrease with a fixed learning rate, although not necessarily at every step."
    },
    "answer": 0,
    "zh": {
      "stem": "从 SGD 角度，使用学习率调度器的一个可能原因是？",
      "options": [
        "某些条件下固定步长只能进入 O(η) 邻域，衰减有助于降低损失",
        "固定步长一定发散",
        "固定步长最终精确最优，调度只减少计算",
        "固定步长时损失从不下降"
      ],
      "explanation": "固定步长下噪声可能形成精度瓶颈；适当减小步长能降低波动并进一步收敛，但需满足相应条件。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "6-2-7",
    "chapter": 6,
    "quiz": 2,
    "number": 7,
    "source": "week6-quiz2.pdf",
    "en": {
      "stem": "Step Decay How does the step-decay learning schedule change the learning rate?",
      "options": [
        "It drops at selected milestones.",
        "It follows a smooth cosine curve.",
        "It follows a linear curve.",
        "It stays constant until training ends."
      ],
      "explanation": "A step-decay learning-rate schedule reduces the learning rate at predefined training milestones, often by multiplying it by a fixed factor. This allows faster progress early in training and finer optimization later. B is incorrect because cosine decay changes the learning rate smoothly according to a cosine curve. C is incorrect because linear decay changes the learning rate linearly. D is incorrect because keeping the learning rate constant throughout training describes a constant learning-rate schedule, not step decay."
    },
    "answer": 0,
    "zh": {
      "stem": "阶梯衰减学习率怎样变化？",
      "options": [
        "在指定里程碑降低",
        "沿光滑余弦曲线变化",
        "沿直线变化",
        "一直不变"
      ],
      "explanation": "Step decay 在预设步数或轮数乘一个衰减因子，得到分段常数的学习率。"
    },
    "scored": true,
    "accepted": [
      0
    ]
  },
  {
    "id": "6-2-8",
    "chapter": 6,
    "quiz": 2,
    "number": 8,
    "source": "week6-quiz2.pdf",
    "en": {
      "stem": "Errors are 10⁻², 10⁻³ and 10⁻⁴ after 10⁴, 10⁵ and 10⁶ iterations. Which rate best fits?",
      "options": [
        "O(1/T): A tenfold increase in iterations reduces the error by a factor of 10.",
        "O(1/T): A tenfold increase in iterations reduces the error by only about a factor of 10.",
        "O(1/T²): A tenfold increase in iterations would reduce the error by a factor of 100.",
        "O((1-c)ᵀ), where 0 < c < 1: This represents linear (geometric) convergence, where the error decreases exponentially with iterations, unlike the observed inverse-linear pattern."
      ],
      "explanation": "Ten times as many iterations gives one tenth the error, consistent with O(1/T). The source marks A but A and B are equivalent, so both are accepted."
    },
    "answer": 0,
    "zh": {
      "stem": "10⁴、10⁵、10⁶ 次迭代后误差分别为 10⁻²、10⁻³、10⁻⁴。最符合哪种速率？",
      "options": [
        "O(1/T)：迭代十倍，误差缩小十倍",
        "O(1/T)：迭代十倍，误差约缩小十倍",
        "O(1/T²)：迭代十倍，误差缩小百倍",
        "O((1−c)^T)：几何衰减"
      ],
      "explanation": "原答案为 A，但原文件 A、B 实质同义。本网页接受 A、B；此规律是 O(1/T) 的次线性收敛。"
    },
    "accepted": [
      0,
      1
    ],
    "note": true,
    "scored": true
  },
  {
    "id": "6-2-9",
    "chapter": 6,
    "quiz": 2,
    "number": 9,
    "source": "week6-quiz2.pdf",
    "en": {
      "stem": "Errors are 10⁻², 10⁻³ and 10⁻⁴ after 100, 200 and 300 iterations. Which rate best fits?",
      "options": [
        "O(1/T): Polynomial decay, which does not match the observed fixed-factor reduction over equal iteration intervals.",
        "O(1/T): Decays too slowly to match the observations.",
        "O(1/T²): Also represents polynomial decay rather than the observed geometric pattern.",
        "O((1-c)ᵀ), where 0 < c < 1: Exponential decay, consistent with the error decreasing by a constant factor over each fixed interval of iterations."
      ],
      "explanation": "Each fixed block of 100 iterations multiplies error by 0.1. This is geometric (exponential) decay, called linear convergence in optimization."
    },
    "answer": 3,
    "zh": {
      "stem": "100、200、300 次迭代后误差为 10⁻²、10⁻³、10⁻⁴。最符合哪种速率？",
      "options": [
        "O(1/T)，多项式衰减",
        "O(1/T)，衰减太慢",
        "O(1/T²)，多项式衰减",
        "O((1−c)^T)，几何衰减"
      ],
      "explanation": "每增加固定 100 步，误差乘 0.1，符合指数/几何衰减，优化中称线性收敛。"
    },
    "scored": true,
    "accepted": [
      3
    ]
  },
  {
    "id": "7-1-1",
    "chapter": 7,
    "quiz": 1,
    "number": 1,
    "source": "Lecture7_Quiz1.pdf",
    "en": {
      "stem": "Training Error and Overfitting A deeper network has both higher training error and higher test error than a shallower one. Can overfitting alone explain the higher test error?",
      "options": [
        "Yes; the deeper network fits the training data better.",
        "Yes; the deeper network has a larger generalization gap.",
        "No; the deeper network fits the training data worse.",
        "No; the deeper network can represent fewer functions."
      ],
      "explanation": "Option C states that the deeper networkfits the training data worse, which follows from its higher training error. Overfitting alone cannot explain this observation: it concerns a model that fits the training data well but performs poorly on new data. A contradicts the given training result. B does not account for the higher training error. D is not supported by the question."
    },
    "answer": 2,
    "zh": {
      "stem": "深网络的训练和测试误差均高于浅网络。仅靠过拟合能解释吗？",
      "options": [
        "能，深网络更好地拟合训练数据",
        "能，深网络泛化差距更大",
        "不能，深网络对训练数据拟合更差",
        "不能，深网络能表示的函数更少"
      ],
      "explanation": "过拟合描述训练好而测试差；这里训练误差本身也变大，因此过拟合不能单独解释。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "7-1-2",
    "chapter": 7,
    "quiz": 1,
    "number": 2,
    "source": "Lecture7_Quiz1.pdf",
    "en": {
      "stem": "Identity Layers and Optimization A deeper plain network can reproduce a shallower network by setting its extra layers to the identity. After training, the deeper network has higher training error. What does this show?",
      "options": [
        "The deeper network’s representation error is larger.",
        "The deeper network’s optimization error is larger.",
        "A larger generalization gap explains the higher training error.",
        "N/A"
      ],
      "explanation": "An identity layer passes its input through unchanged:I (x) = x. Thus the deeper model can reproduce the shallower model, so its best achievable training error cannot be higher. If itstrained error is higher, the extra error comes from the optimization process (B). A is inconsistent with the ability to copy the shallower model. C concerns test performance rather than the training error. D provides no answer."
    },
    "answer": 1,
    "zh": {
      "stem": "深普通网络可将额外层设为恒等映射，复现浅网络，但训练后误差更高。这说明什么？",
      "options": [
        "表示误差更大",
        "优化误差更大",
        "泛化差距解释训练误差增大",
        "不适用"
      ],
      "explanation": "深网络至少能表示浅网络，最优训练误差不应更差。训练得到的误差更高说明优化未充分达到可实现水平。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "7-1-3",
    "chapter": 7,
    "quiz": 1,
    "number": 3,
    "source": "Lecture7_Quiz1.pdf",
    "en": {
      "stem": "Identity Mapping and Activation Placement Block P outputsReLU(x + F (x)). Block Q outputsx + F (x). Their input and output dimensions match. IfF (x) = 0, which block reproduces every possible inputx exactly?",
      "options": [
        "Both P and Q.",
        "P only.",
        "Q only.",
        "Neither P nor Q."
      ],
      "explanation": "If F (x) = 0, block Q givesQ(x) = x for every input. Block P gives P(x) = ReLU(x), which replaces any negative component ofx with zero. Therefore only Q reproducesevery possible input. A and B incorrectly include P, while D incorrectly excludes Q."
    },
    "answer": 2,
    "zh": {
      "stem": "P(x)=ReLU(x+F(x))，Q(x)=x+F(x)，输入输出维度相同。当 F(x)=0，哪个对所有输入都是恒等映射？",
      "options": [
        "两者都是",
        "仅 P",
        "仅 Q",
        "都不是"
      ],
      "explanation": "Q(x)=x；P(x)=ReLU(x) 会将负分量截为零，所以不对所有输入保持恒等。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "7-1-4",
    "chapter": 7,
    "quiz": 1,
    "number": 4,
    "source": "Lecture7_Quiz1.pdf",
    "en": {
      "stem": "For a linear ResNet x_(l+1)=(I+W_l)x_l, W_l∈ℝ^(d×d) has independent zero-mean entries with variance 1/d. What happens to the expected squared signal norm?",
      "options": [
        "It does not change because each weight entry has variance1/d.",
        "It is multiplied by a factor greater than one at each block.",
        "It increases by the same amount at each block.",
        "It gets smaller because the random branches cancel each other."
      ],
      "explanation": "E[W_lx]=0 and E‖W_lx‖²=‖x‖². The mixed term vanishes, so E‖(I+W_l)x‖²=2‖x‖²: each block doubles the expected energy."
    },
    "answer": 1,
    "zh": {
      "stem": "线性 ResNet x_(l+1)=(I+W_l)x_l，W_l 为 d×d，独立零均值元素，方差 1/d。期望信号平方范数随层数如何变化？",
      "options": [
        "不变，因为元素方差为 1/d",
        "每块乘大于 1 的因子",
        "每块增加固定量",
        "随机分支抵消而减小"
      ],
      "explanation": "交叉项均值为零，E‖W_lx‖²=‖x‖²，所以 E‖(I+W_l)x‖²=2‖x‖²，每块翻倍。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "7-1-5",
    "chapter": 7,
    "quiz": 1,
    "number": 5,
    "source": "Lecture7_Quiz1.pdf",
    "en": {
      "stem": "A linear ResNet has L blocks, x_(l+1)=(I+W_l)x_l, and independent zero-mean weights of variance γ/d. How should γ scale with L to keep expected squared signal norm bounded?",
      "options": [
        "γ≈L",
        "γ≈√L",
        "γ≈1/L",
        "γ=1"
      ],
      "explanation": "Each block multiplies expected energy by 1+γ, so L blocks give (1+γ)^L. With γ≈1/L this remains bounded, approaching e for γ=1/L."
    },
    "answer": 2,
    "zh": {
      "stem": "L 块线性 ResNet x_(l+1)=(I+W_l)x_l，权重独立、均值 0、方差 γ/d。如何令期望平方范数随 L 保持有界？",
      "options": [
        "γ 约为 L",
        "γ 约为 √L",
        "γ 约为 1/L",
        "γ=1"
      ],
      "explanation": "每块期望能量乘 (1+γ)，L 块乘 (1+γ)^L。取 γ≈1/L 时趋于 e，保持有界。"
    },
    "scored": true,
    "accepted": [
      2
    ]
  },
  {
    "id": "7-2-2",
    "chapter": 7,
    "quiz": 2,
    "number": 2,
    "source": "Lecture7_Quiz2.pdf",
    "en": {
      "stem": "For training loss F(θ) and fixed directions u,v, what does F(θ*+αu+βv), varying α and β, show?",
      "options": [
        "Loss alongu only, with no change alongv.",
        "Loss on the 2D plane throughθ∗ defined byu and v.",
        "Loss averaged over all directions with the sameα, β.",
        "Loss along the path followed by training from initialization."
      ],
      "explanation": "It shows the loss on the two-dimensional plane through θ* spanned by u and v. It is not an average over directions or necessarily the training trajectory."
    },
    "answer": 1,
    "zh": {
      "stem": "训练损失 F(θ)，固定方向 u、v，绘制 F(θ*+αu+βv) 随 α、β 变化的图，展示什么？",
      "options": [
        "仅沿 u 的损失，v 不变",
        "经过 θ*、由 u 和 v 张成平面上的损失",
        "同 α、β 下所有方向的平均损失",
        "实际训练路径的损失"
      ],
      "explanation": "两个系数分别沿固定方向移动，得到高维参数空间的二维切片，不一定是训练轨迹。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "7-2-3",
    "chapter": 7,
    "quiz": 2,
    "number": 3,
    "source": "Lecture7_Quiz2.pdf",
    "en": {
      "stem": "What a 2D Loss Plot Cannot Prove Two networks use the same training settings. Network A has a smooth basin in its 2D loss plot and ends with lower training loss. Network B’s plot has many small dips. Which conclusion isnot supported by these observations?",
      "options": [
        "Network A’s loss looks smoother in the plotted directions.",
        "Network A’s full loss landscape is convex.",
        "Network A may be easier to optimize than Network B.",
        "/"
      ],
      "explanation": "A 2D plot shows the loss only alongtwo selected directions. A smooth basin in that plane cannot prove that thefullloss landscape is convex (B); other directions may behave differently. A directly describes the visible plot. C is a reasonable possibility, not a certainty, given A’s lower training loss under the same settings. D is only a placeholder and makes no substantive claim."
    },
    "answer": 1,
    "zh": {
      "stem": "同训练配置下，A 的二维损失图有光滑盆地且最终训练损失较低，B 有多个小凹陷。哪项不受这些观察支持？",
      "options": [
        "A 在所绘方向更光滑",
        "A 的完整损失景观是凸的",
        "A 可能更容易优化",
        "原题占位选项 /"
      ],
      "explanation": "二维切片不能证明高维全空间凸性；未绘出的方向可能完全不同。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "7-2-4",
    "chapter": 7,
    "quiz": 2,
    "number": 4,
    "source": "Lecture7_Quiz2.pdf",
    "en": {
      "stem": "Let f(w)=(1−φ(w))² for continuous φ. Which statement about bad local minima is correct?",
      "options": [
        "They cannot occur for any continuousφ.",
        "They occur for some continuousφ, but not for others.",
        "They occur for every continuousφ.",
        "\\"
      ],
      "explanation": "For φ(w)=w, there is no bad local minimum. Other continuous φ can have a local maximum below 1 while reaching 1 elsewhere, producing a positive-loss local minimum and a zero global minimum. Thus it depends on φ."
    },
    "answer": 1,
    "zh": {
      "stem": "f(w)=(1−φ(w))²，φ 连续。关于坏的（非全局）局部最小值，哪项正确？",
      "options": [
        "任意连续 φ 都不存在",
        "某些连续 φ 存在，另一些不存在",
        "所有连续 φ 都存在",
        "原题占位选项反斜杠"
      ],
      "explanation": "φ(w)=w 时是凸二次函数，没有坏局部极小；若 φ 在低于 1 处局部极大、又在别处达到 1，可产生正损失局部极小而全局值为零。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  },
  {
    "id": "7-2-5",
    "chapter": 7,
    "quiz": 2,
    "number": 5,
    "source": "Lecture7_Quiz2.pdf",
    "en": {
      "stem": "The Concern About Non-Convex Optimization What did Minsky and Papert worry could happen when training a neural network with a non-convex loss?",
      "options": [
        "Gradient descent might not converge.",
        "Training might get trapped at a suboptimal local minimum.",
        "Poor initialization might disrupt signal propagation and make training difficult.",
        "The model might generalize poorly to new data."
      ],
      "explanation": "A non-convex loss can have a local minimum whose value is higher than the global minimum. The concern was that training could get trapped at such asuboptimal local minimum (B). A is a different question about convergence. C concerns signal propagation in deep networks, and D concerns generalization rather than getting trapped during optimization."
    },
    "answer": 1,
    "zh": {
      "stem": "Minsky 与 Papert 对非凸神经网络训练担心什么？",
      "options": [
        "梯度下降可能不收敛",
        "训练可能困在次优局部最小值",
        "初始化不佳妨碍信号传播",
        "模型泛化不佳"
      ],
      "explanation": "本题关注非凸优化中的坏局部极小，即局部无法改善但别处存在更小目标值。"
    },
    "scored": true,
    "accepted": [
      1
    ]
  }
];
