module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended', // это набор правил линтинга, рекомендуемых командой ESLint
        'plugin:react/recommended', // отвечает за предоставление рекомендаций по стилю и правилам программирования для React приложений.
        'plugin:@typescript-eslint/recommended', // отвечает за рекомендуемые правила для проверки кода, использующего TypeScript
        'airbnb', // набор правил и рекомендаций для написания чистого и согласованного кода в React приложениях
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'simple-import-sort'],
    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        'react/jsx-indent': [2, 4], // отвечает за правило отступов при написании JSX кода
        'react/jsx-indent-props': [2, 4], // отвечает за правило отступов при написании атрибутов JSX элемента
        'react/jsx-filename-extension': [
            2,
            {
                // Набор разрешенных расширений
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'react/function-component-definition': 'off', // отключает правило ESLint, которое проверяет определение функциональных компонентов в React
        'import/no-unresolved': 'off', // отвечает за проверку импорта модулей, чтобы убедиться, что все импортированные модули можно разрешить и они существуют.
        'import/prefer-default-export': 'off', // отвечает за предпочтение использования экспорта по умолчанию (default export) вместо именованного экспорта
        'no-unused-vars': 'warn', // Оно отвечает за поиск и предупреждение о неиспользуемых переменных в вашем коде.
        'react/require-default-props': 'off', // Оно отвечает за требование указания значений по умолчанию для пропсов (prop) в компонентах React
        'react/react-in-jsx-scope': 'off', // Этот модуль гарантирует, что компилятор будет распознавать теги React и преобразовывать их в соответствующий JavaScript код
        'react/jsx-props-no-spreading': 'off', // отвечает за запрет использования оператора spread (...) для передачи всех props объекта в JSX компоненте
        'no-shadow': 'off', // отвечает за проверку и предотвращение использования переменных с тем же именем внутри области видимости, которые уже объявлены во внешней области видимости.
        'import/extensions': 'off', // отвечает за проверку расширений файлов при импорте модулей. При использовании данного правила, линтер будет проверять, чтобы все импорты содержали правильное расширение файла
        'no-tabs': 'off', // отвечает за проверку использования символа табуляции (табов) вместо пробелов для отступов в коде
        'no-undef': 'off', // указывает на то, что используется нераспознаваемое имя переменной, функции или класса.
        'no-underscore-dangle': 'off', // указывает на то, что в коде используется подчеркивание "_", которое не рекомендуется использовать в именах переменных или методов
        'react/prop-types': 'off', // отвечает за проверку типов пропсов (props) в компонентах
        'import/no-extraneous-dependencies': 'off', // это правило линтера, которое отслеживает ненужные или лишние зависимости при импорте модулей в проекте React.
        'jsx-a11y/click-events-have-key-events': 'off', // проверяет, что компоненты с обработчиками кликов также имеют соответствующие обработчики клавиатуры
        'jsx-a11y/no-static-element-interactions': 'off', // проверяет, использует ли элемент в React компоненте интерактивное поведение, такое как обработка событий или изменение состояния.
        'react-hooks/rules-of-hooks': 'error', // служит для обеспечения корректного использования хуков в приложении
        'react-hooks/exhaustive-deps': 'warn', // это правило линтера для React Hooks, которое проверяет зависимости (dependencies) в функциональных компонентах, использующих хуки (useEffect, useCallback, useMemo и т. д.)
        'no-param-reassign': 'off', // это правило линтера, которое отвечает за то, можно ли изменять параметры функции напрямую.
        'max-len': ['warn', { ignoreComments: true, code: 120 }], // отвечает за ограничение длины строк кода. Он проверяет, чтобы каждая строка кода не превышала заданное количество символов.
        'consistent-return': 'off', // отвечает за проверку согласованности возвращаемых значений функций. Это правило требует, чтобы функции возвращали значения одного и того же типа
        'react/jsx-no-useless-fragment': 'off', // отвечает за проверку наличия бесполезных фрагментов (React.Fragment) в JSX коде.
        'react/no-array-index-key': 'off', // отвечает за предупреждение, когда в качестве ключей элементов массива используются индексы
        'linebreak-style': 'off', // отвечает за проверку и установку стиля разрыва строк в коде. Это правило проверяет, что используется одинаковый стиль разрыва строк во всем проекте.
        '@typescript-eslint/ban-ts-comment': 'off', // это правило линтера eslint, которое предлагает использовать альтернативы комментариям с указанием типов внутри кода TypeScript.
        'no-plusplus': 'off', // отвечает за запрет использования оператора инкремента ++ и декремента --
        'object-curly-newline': 'off', // для реагирования на форматирование фигурных скобок при использовании объектных именованных экспортов или деклараций функций в React компонентах. Оно контролирует расположение фигурных скобок для объявления props, state, методов класса и других свойств компонента.
        'jsx-a11y/label-has-associated-control': 'off', // которое проверяет, что каждый элемент <label> имеет атрибут htmlFor или связанный элемент управления.
        'no-useless-escape': 'off', // отвечает за проверку наличия ненужных экранированных символов внутри строковых литералов или регулярных выражений. Эта проверка помогает обнаружить случаи, когда обратный слеш "" используется перед символом, который не требует экранирования.
        'no-nested-ternary': 'off', // проверяет наличие вложенных условных операторов тернарного типа (? :). Тернарный оператор позволяет создавать простые условные выражения в одной строке кода, но их вложение может сделать код менее читаемым и сложным для понимания.
        'simple-import-sort/imports': 'error', // отвечает за сортировку импортов в файле react. известен своей способностью сортировать импорты по типам модулей, таким как "библиотеки", "файлы" и "расширения"
        'simple-import-sort/exports': 'error', // отвечает за сортировку экспортов в файле react
        'sort-imports': 'off', // отвечает за сортировку импортов в файлах React
        'import/order': 'off', // отвечает за определение порядка импортов в компонентах и других файлах кода.
        'arrow-body-style': 'off',
        'no-unused-expressions': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'react/button-has-type': 'off',
    },
};