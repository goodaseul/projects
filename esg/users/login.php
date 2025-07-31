<? require_once $_SERVER["DOCUMENT_ROOT"]."/inc/head.php"; ?>
<? require_once $_SERVER["DOCUMENT_ROOT"]."/inc/meta.php"; ?>
<? require_once $_SERVER["DOCUMENT_ROOT"]."/inc/resource.php"; ?>
<link rel="stylesheet" href="/static/css/users.css">

</head>

<body>
    <? require_once $_SERVER["DOCUMENT_ROOT"]."/inc/header.php"; ?>

    <main class="l_sub l_sub_users l_sub_login">
        <section class="section section_top">
            <div class="inner">
                <? require_once $_SERVER["DOCUMENT_ROOT"]."/inc/breadcrumb.php"; ?>
                <h2 id="title"></h2>

                <div class="wrap">
                    <div class="wrap_form">
                        <form action="">
                            <div class="wrap_input error">
                                <!-- disabled시 input에  disabled 추가-->
                                <label for="user_id">
                                    아이디
                                </label>
                                <input type="text" placeholder="아이디를 입력해주세요" name="user_id" id="user_id" maxlength="">
                                <p class="error_msg"><i class="icon"></i>에러메세지~~~ </p>
                            </div>
                            <div class="wrap_input">
                                <label for="user_pw">
                                    비밀번호
                                </label>
                                <input type="text" placeholder="8-12자의 영문자, 숫자, 특수문자 조합" name="user_pw" id="user_pw"
                                    maxlength="">
                            </div>
                            <div class="wrap_check">
                                <div class="check_box">
                                    <!-- disabled시 input에  disabled 추가-->
                                    <input type="checkbox" disabled name="idSave" id="idSave">
                                    <label for="idSave">아이디 저장</label>
                                </div>
                            </div>
                            <button class="btn btn_green">로그인</button>
                        </form>
                        <ul class="link_list">
                            <li>
                                <a href="">아이디 찾기</a>
                            </li>
                            <li>
                                <a href="">비밀번호 찾기</a>
                            </li>
                            <li>
                                <a href="">회원가입</a>
                            </li>
                        </ul>
                    </div>
                    <div class="wrap_notice">
                        <p>
                            개인정보 보호를 위해 비밀번호 5회 이상 오류 시, 비밀번호 재설정이
                            필요합니다.
                        </p>
                        <p>
                            비밀번호는 주기적(6개월)으로 변경하시고, 서비스 이용 후 반드시
                            로그아웃을 하시기 바랍니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <? require_once $_SERVER["DOCUMENT_ROOT"]."/inc/footer.php"; ?>
</body>

</html>