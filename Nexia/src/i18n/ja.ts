const ja = {
  common: {
    login: "ログイン",
    logout: "ログアウト",
    email: "メール",
    password: "パスワード",
    footer: {
      copyright: "© Nexia 2026. 全著作権所有。",
      terms: "利用規約"
    }
  },
  settings: {
    title: "設定"
  },
  navigation: {
    start: "スタート",
    description: "説明",
    apps: "アプリケーション",
    devices: "デバイス",
    gratitude: "Nexia"
  },
  home: {
    start: {
      description1: "完全にウェブ上で再現されたモバイルオペレーティングシステム。Nexiaは視覚的なモックアップではありません。現代のスマートフォンの実際の動作をシミュレートするインタラクティブな環境です。",
      description2: "画面ロック解除、動的なステータスバー、スライドパネル、下部ナビゲーション、相互接続されたアプリケーション。",
      selectDevice: "デバイスを選択"
    },
    description: {
      title: "説明",
      text1: "Nexiaは本物の電話の機能的な表現として設計され、構造化されたウェブアプリケーションとしてゼロから構築されました。",
      text2: "システムはグローバル状態管理、モジュール間通信、論理ハードウェアシミュレーション、外部APIとの接続を統合します。",
      text3: "インターフェースだけではありません。建築、論理、システムの一貫性です。"
    },
    apps: {
      title: "アプリケーション",
      description: "各アプリケーションは独立して設計・開発されましたが、すべてが状態を共有し、システムイベントに反応します。"
    },
    devices: {
      title: "デバイス",
      description: "Nexiaはモバイル環境に限定されません。システムにはデバイスの銀行アプリケーションに直接接続されたATMが含まれます。",
      mobile: {
        title: "モバイルデバイス",
        text: "接続されたアプリケーションと動的な動作を持つインタラクティブなオペレーティングシステム。"
      },
      atm: {
        title: "ATM",
        text: "電話の内部銀行システムにリンクされた外部インターフェースで、リアルタイムのデータ同期を可能にします。"
      },
      authRequired: "デバイスを使用するにはログインまたは登録が必要です",
      bankRequired: "ATMを使用するには銀行口座を作成する必要があります"
    },
    thanks: {
      title: "Nexiaをご覧いただきありがとうございます",
      text1: "Nexiaは完全に無料のプロジェクトです。すべての機能は隠れたコスト、サブスクリプション、必須の支払いなしで利用可能です。",
      text2: "このプロジェクトはデザイン、アーキテクチャ、技術実行を表します。ウェブ上で開発された完全なシステムです。",
      text3: "プロジェクトの目標は、誰にでもアクセス可能なツールを提供し、ブラウザから直接仮想デバイスの無料使用を可能にすることです。Nexiaは常に無料で、オープンでシンプルで、ユーザーに障壁のない体験を提供することに焦点を当てます。"
    }
  },
  auth: {
    login: {
      title: "ログイン",
      forgotPassword: "パスワードを忘れた?",
      divider: "または",
      email: "メール",
      emailPlaceholder: "email@example.com",
      password: "パスワード",
      passwordPlaceholder: "********",
      show: "表示",
      hide: "非表示",
      submit: "アクセス",
      error: "ログインエラー"
    },
    register: {
      title: "アカウントを作成",
      divider: "または",
      name: "名前",
      namePlaceholder: "名前",
      lastname: "姓",
      lastnamePlaceholder: "姓",
      email: "メール",
      emailPlaceholder: "email@example.com",
      password: "パスワード",
      passwordPlaceholder: "********",
      show: "表示",
      hide: "非表示",
      bankOptional: "銀行アプリアカウントを作成（オプション）",
      atmOptional: "ATMアカウントを作成（オプション）",
      acceptTerms: "利用規約に同意します",
      submit: "登録",
      googleError: "Google登録が完了しませんでした"
    },
    reset: {
      request: {
        title: "パスワードの復旧",
        email: "メール",
        emailPlaceholder: "email@example.com",
        sending: "送信中...",
        submit: "コードを送信"
      },
      verify: {
        title: "コードを確認",
        instructionText: "メールで受け取った6桁のコードを入力してください",
        incompleteCode: "コードが不完全です",
        invalidCode: "無効なコード"
      },
      newPassword: {
        title: "新しいパスワード",
        password: "新しいパスワード",
        passwordPlaceholder: "新しいパスワード",
        changing: "変更中...",
        submit: "パスワードを変更"
      }
    },
    termsPrivacy: {
      prefix: "ログインまたはアカウントを作成することにより、当社の",
      and: "および",
      privacy: "プライバシーポリシー"
    },
    deleteAccount: "アカウントを削除",
    profile: {
      title: "プロフィール",
      intro: "プロフィールでは、システムツールにアクセスし、個人設定を管理し、Nexia環境内で利用可能な銀行、ATM、その他のアプリケーションなどのサービスを利用できます。",
      applications: "アプリケーション",
      applicationsDesc: "システム内で利用可能なアプリケーションにアクセスし、モバイルインターフェースからそれらの間を移動します。",
      finance: "金融システム",
      financeDesc: "銀行の状態を確認し、Nexia環境のATMから操作を実行します。",
      settings: "設定",
      settingsDesc: "アカウント情報を管理し、プロフィール内で利用可能なオプションを調整します。"
    },
    support: {
      title: "サポート",
      description: "Nexiaを使用する際に問題が発生した場合は、以下のフォームを送信してテクニカルサポートチームに連絡できます。",
      fullName: "フルネーム",
      email: "メール",
      message: "問題を説明してください...",
      send: "送信",
      divider: "または",
      supportEmail: "サポートメール",
      copy: "コピー",
      copied: "✔",
      successMessage: "メッセージが正常に送信されました",
      errorMessage: "予期しないエラー"
    },
    settings: {
      title: "設定",
      accountInfo: "アカウント情報",
      name: "名前",
      lastname: "姓",
      email: "メール",
      newPassword: "新しいパスワード",
      updateData: "データを更新",
      logout: "ログアウト",
      logoutButton: "ログアウト",
      deleteAccountSection: "アカウント削除",
      deleteAccountButton: "アカウント削除",
      updateSuccess: "更新成功",
      deleteSuccess: "アカウントが正常に削除されました",
      errorMessage: "予期しないエラー",
      unexpectedError: "予期しないエラー"
    },
    header: {
      intro: "ログインして設定を保存し、Nexiaを使用します。",
      login: "ログイン",
      register: "登録",
      menu: {
        profile: "プロフィール",
        support: "サポート",
        config: "設定"
      }
    },
    components: {
      deleteButton: {
        error: "Googleでのアカウント削除エラー"
      },
      loginButton: {
        error: "Googleでのログインエラー",
        continueGoogle: "Googleで続ける"
      },
      registerButton: {
        error: "Googleでのアカウント作成エラー",
        createGoogle: "Googleでアカウント作成",
        incompleteRegister: "Googleでの登録が完了しませんでした"
      }
    }
  },
  terms: {
    title: "利用規約",
    welcome: "Nexiaへようこそ。このウェブサイトにアクセスし使用することにより、これらの利用規約に拘束されることに同意します。いずれかの条件に同意しない場合は、このサイトを使用しないでください。",
    definitions: {
      title: "1. 定義",
      content: "\"サイト\"はNexiaのウェブプラットフォームを指します。\"ユーザー\"はサイトにアクセスまたは使用する人を指します。\"コンテンツ\"にはサイトで利用可能なテキスト、画像、オーディオ、ビデオ、コード、その他の資料が含まれます。"
    },
    access: {
      title: "2. アクセスと使用",
      content: "特に明記しない限り、サイトへのアクセスは無料です。ユーザーは法律、善意、これらの条件に従ってサイトを使用することに同意し、サイトを損傷、無効化、過負荷、劣化させる、または他のユーザーの正常な使用を妨げる可能性のあるあらゆる行為を控えます。"
    },
    obligations: {
      title: "3. ユーザーの義務",
      list: [
        "マルウェア、ウイルス、または損害を引き起こすコードを導入しない。",
        "偽のアカウントを登録したり、第三者を偽装しない。",
        "違法、名誉毀損、または不道徳な目的でサイトを使用しない。"
      ]
    },
    intellectual: {
      title: "4. コンテンツと知的財産",
      content1: "特に明記しない限り、サイトのすべてのコンテンツはNexiaまたはそのライセンサーの所有であり、知的財産規制で保護されています。明示的な許可なしに複製、配布、または搾取は禁止されています。",
      content2: "特に、このサイトで使用されるすべてのアイコンはNexiaの著者によって深く設計・開発されました；ソーシャルネットワークアイコン（X、GitHub、Discordなどのプラットフォームの公式アイコンなど）を除き、第三者からコピーされていません。これらはそれらのサービスへのリンクとしてのみ表示されます。"
    },
    thirdParty: {
      title: "5. 第三者コンテンツとリンク",
      content: "サイトには外部リソースまたは第三者コンテンツへのリンクが含まれる場合があります。これらのリンクはユーザーの便宜のためにのみ提供されます；Nexiaはリンクされたサイトの真実性、有用性、可用性を制御または保証せず、そのコンテンツに対する責任を負いません。"
    },
    privacy: {
      title: "6. データ保護とプライバシー",
      content: "個人データの処理はサイトのプライバシーポリシーに準拠します。サイトを使用することにより、そのポリシーで説明されているデータの収集と使用に関する慣行に同意します。"
    },
    cookies: {
      title: "7. クッキーと追跡",
      content: "当サイトはユーザーエクスペリエンスの向上、トラフィックの分析、コンテンツのカスタマイズのためにクッキーおよび類似技術を使用する場合があります。詳細と無効化方法についてはクッキーポリシーを確認してください。"
    },
    userContent: {
      title: "8. ユーザー提供コンテンツ",
      content: "サイトがユーザーにコンテンツのアップロードを許可する場合、ユーザーはそのコンテンツに対する必要な権利を保証し、Nexiaにサイト上でそのコンテンツを使用、複製、表示するための非独占的、世界的なサブライセンス可能なライセンスを付与します。"
    },
    disclaimer: {
      title: "9. 免責事項",
      content: "サイトは\"現状有姿\"および\"利用可能\"で提供されます。Nexiaはエラーの不在、継続的な可用性、または特定の目的への適合性を保証しません。法律で許可される最大限の範囲で、Nexiaはサイトの使用または使用不能から生じる損害に対するあらゆる責任を除外します。"
    },
    security: {
      title: "10. セキュリティ",
      content: "サイトとユーザーデータを保護するための合理的な措置を実施していますが、システムは完全に安全ではありません。ユーザーは安全な慣行（強力なパスワード、システムの更新）を採用し、疑わしい活動を報告する必要があります。"
    },
    modifications: {
      title: "11. サービスと条件の変更",
      content: "Nexiaはいつでもサイトまたはその機能を変更、中断、または停止する権利を留保します。また、これらの条件を更新する場合があります；変更は本ページへの公開から有効になります。定期的に確認することを推奨します。"
    },
    termination: {
      title: "12. 終了",
      content: "Nexiaは、適切と判断し、事前通知なしに、これらの条件に違反する、またはその行為が不適切と見なされるユーザーにこのサイトへのアクセスを拒否または撤回する場合があります。"
    },
    jurisdiction: {
      title: "13. 適用法と管轄",
      content: "これらの条件はNexiaの本社がある管轄の適用法に従って統治され解釈されます。これらの条件から生じる紛争の解決のため、当事者は対応する管轄裁判所に服します。"
    },
    contact: {
      title: "14. 連絡先とサポート",
      intro: "これらの条件またはサイトに関する問い合わせについては、メール",
      discord: "またはDiscordで著者に直接連絡できます。Discordでユーザーdxvv_7を探すか、サイトに表示される連絡チャネルを使用してください。",
      response: "合理的な期間内に問い合わせに応答するよう努めます。"
    },
    lastUpdate: "最終更新：2026年3月。"
  },
  apps: {
    files: "ファイル",
    bank: "銀行",
    calculator: "計算機",
    calendar: "カレンダー",
    money: "お金",
    clock: "時計",
    contact: "連絡先",
    messages: "メッセージ",
    gallery: "ギャラリー",
    notes: "メモ",
    radio: "ラジオ",
    phone: "電話",
    rewards: "報酬",
    security: "セキュリティ",
    settings: "設定",
    sim: "Sim",
    simpsons: "シンプソンズ"
  },
  devices: {
    phone: {
      appsTitle: "利用可能なアプリケーション",
      appsDescription1: "Nexiaのモバイルデバイスには、本物の電話の基本機能をシミュレートする統合アプリケーションのセットがあります。これには電卓、ToDo、メモ、設定、天気、ファイル、時計、その他のシステムユーティリティが含まれます。",
      appsDescription2: "これらの各アプリケーションは完全に機能し、タスクの管理、メモの作成、ファイルの探索、時計の確認、デバイスの設定調整など、現実的にユーザーが対話することを可能にします。環境全体は、物理的なモバイルデバイスを使用するのと同様に、一貫性があり直感的な体験を提供するように設計されています。"
    },
    atm: {
      title: "スマートATM",
      description1: "このデバイスは、銀行カードを使用して認証し、安全にアカウントにアクセスすることを可能にします。",
      description2: "内部に入ると、銀行に送金したり、電話番号を使用して他のユーザーに資金を転送したり、デバイスから直接金融操作を管理したりできます。",
      description3: "銀行口座とATMの両方で残高照会にアクセスでき、実行されたすべての取引の詳細な履歴も利用できます。"
    }
  }
}

export default ja