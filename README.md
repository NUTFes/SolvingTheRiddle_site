# SolvingTheRiddle_site
これは，43rd技大祭の企画「技大祭からの挑戦状」のリポジトリです．
命名規則を守って使いましょう

## 命名規則
- mainブランチ
    - 安定ブランチ，本番用ブランチ
- developブランチ
    - 開発用ブランチ，開発段階での安定ブランチ，これを公開するときに安定ブランチにマージ
- feature/[NAME]/[ISUEE_NUM]-[TITLE]
    - 機能の追加や変更などを行うブランチ，developブランチから派生
    - ex) feature/dodo/1-create-view-env
- fix/[NAME]/[ISUEE_NUM]-[TITLE]
    - バグの修正などを行うブランチ，developブランチから派生
    - ex) fix/dodo/2-fix-view-env
