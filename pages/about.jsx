import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

/**component import */
import CodeBlock from '@/components/Contents/CodeBlock';
import CodeLine from '@/components/Contents/CodeLine';
import TagContents from '@/components/About/TagContents';
import { TagOpen, TagClose } from '@/components/About/Tags';
import CircleSvg from '@/components/About/CircleSvg';

/**CSS import */
import style from '@/components/About/About.module.scss';

const about = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className={style.circle}>
                <Image src="/images/profile.jpg" alt="profile" fill />
                <div className={style.circle_text_box}>
                    <CircleSvg
                        className={style.circle_svg}
                        width={'120%'}
                        height={'120%'}
                    />
                </div>
            </div>

            <CodeBlock>
                <CodeLine>
                    <TagOpen
                        tagname={'html'}
                        attr={'lang'}
                        attrValue={'"ko"'}
                    />
                </CodeLine>

                <CodeLine>
                    <TagOpen tagname={'head'} indent={2} />
                </CodeLine>

                <CodeLine>
                    <TagOpen tagname={'title'} indent={3} />
                </CodeLine>
                <CodeLine>
                    <TagContents indent={4}>
                        <Typewriter
                            words={["중요한건 꺾이지 않는 코딩 'O'"]}
                            typeSpeed={100}
                            delaySpeed={3000}
                            cursor
                        />
                        👩‍💻{' '}
                        <strong>
                            {'('}
                            <a
                                href="https://wistful-crocodile-0b1.notion.site/a35f0b4dedfa4044a3c40d26549476a4?pvs=4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                노션 보러가기
                            </a>
                            {')'}
                        </strong>
                    </TagContents>
                </CodeLine>

                <CodeLine>
                    <TagClose tagname={'title'} indent={3} />
                </CodeLine>

                <CodeLine>
                    <TagClose tagname={'head'} indent={2} />
                </CodeLine>

                <CodeLine>
                    <TagOpen tagname={'body'} indent={2} />
                </CodeLine>

                <CodeLine>
                    <TagOpen
                        tagname={'heaeder'}
                        attr={'class'}
                        attrValue={'"자기소개"'}
                        indent={3}
                    />
                </CodeLine>

                <CodeLine>
                    <TagContents indent={4}>
                        안녕하세요! 👋 <br />
                        풀스택개발자(Fullstack Developer) <br />
                        박수빈입니다 !
                    </TagContents>
                </CodeLine>
                <CodeLine>
                    <TagContents indent={4}>
                        <br />
                        최신 웹 트렌드와 기술에 관심이 많아
                        <br />
                        여러가지 스택을 이용해 사이드 프로젝트를 진행하면서 개발
                        역량을 쌓고 있습니다! 📝
                        <br />
                    </TagContents>
                </CodeLine>
                <CodeLine>
                    <TagContents indent={4}>
                        <br />
                        개발을 좋아하고, 잘하는것도 물론 중요하지만 함께
                        소통하고 성장하며 <br />
                        공동의 목표를 위해 나아가는 사람이 팀에게 있어서 가장
                        필요한 개발자라고 생각합니다.
                        <br />
                    </TagContents>
                </CodeLine>
                <CodeLine>
                    <TagContents indent={4}>
                        <br />
                        팀프로젝트를 진행하면서 좋은 아티클을 팀원들과 공유하고,
                        <br />
                        코드 리뷰를 하며 , 열린 자세로 논의하는 등의 경험을 쌓을
                        수 있었습니다.
                        <br />
                    </TagContents>
                </CodeLine>

                <CodeLine>
                    <TagContents indent={4}>
                        <br />
                        할줄아는게 개발이고, 잘하는게 개발이라서 그저 관성적으로
                        코드를 치는 사람이아닌 <br />
                        같은 목표를 갖고 그 목표에 공감하고 함께 즐기면서
                        성장하는 훌륭한 팀플레이어라는 것은
                        <br />
                        저의 가장 큰 장점이라고 생각합니다.
                        <br />
                    </TagContents>
                </CodeLine>

                <CodeLine>
                    <TagClose tagname={'heaeder'} indent={3} />
                </CodeLine>

                <CodeLine />
                <CodeLine>
                    <TagOpen
                        tagname={'main'}
                        attr={'class'}
                        attrValue={'"기술과 경험, 그리고 공부중인 것들"'}
                        indent={3}
                    />
                </CodeLine>

                <CodeLine>
                    <TagContents indent={4}>
                        <Link href="https://wistful-crocodile-0b1.notion.site/a35f0b4dedfa4044a3c40d26549476a4#72613c2e8ca04add9fcf9d4dfc6275f5">
                            <motion.button
                                whileHover={{ scale: 0.9 }}
                                whileTap={{ scale: 0.7 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 17,
                                }}
                                className={style.btn}
                            >
                                <span>보러가기</span>
                            </motion.button>
                        </Link>
                    </TagContents>
                </CodeLine>

                <CodeLine>
                    <TagClose tagname={'main'} indent={3} />
                </CodeLine>
                <CodeLine />

                <CodeLine>
                    <TagOpen
                        tagname={'footer'}
                        attr={'class'}
                        attrValue={'"경력 및 교육"'}
                        indent={3}
                    />
                </CodeLine>

                <CodeLine>
                    <TagContents indent={5}>
                        <h4>📇 경력</h4>
                    </TagContents>
                </CodeLine>
                <CodeLine />

                <CodeLine>
                    <TagContents indent={6}>
                        <dl>
                            <dt>
                                <em>
                                    현대동물병원{'('}2019.11 ~ 2022.07
                                    {')'}
                                </em>
                            </dt>
                            <dd>- 수의테크니션</dd>
                        </dl>
                    </TagContents>
                </CodeLine>

                <CodeLine />
                <CodeLine>
                    <TagContents indent={5}>
                        <h4>👩‍🎓 교육</h4>
                    </TagContents>
                </CodeLine>
                <CodeLine />
                <CodeLine>
                    <TagContents indent={6}>
                        <dl>
                            <dt>
                                - 신한대학교 치기공과{'('}
                                2020.03 입학 ~ 중퇴{')'}
                            </dt>
                            <dt>
                                - Open API를 활용한 자바{'('}
                                JAVA{')'}기반 풀스택개발자 양성과정 수료{'('}
                                2022.11 ~ 2023.05{')'}
                            </dt>
                        </dl>
                    </TagContents>
                </CodeLine>

                <CodeLine>
                    <TagClose tagname={'footer'} indent={3} />
                </CodeLine>

                <CodeLine>
                    <TagClose tagname={'body'} indent={2} />
                </CodeLine>

                <CodeLine>
                    <TagClose tagname={'html'} />
                </CodeLine>
            </CodeBlock>
        </motion.div>
    );
};
export async function getStaticProps() {
    return {
        props: { title: 'About' },
    };
}

export default about;
