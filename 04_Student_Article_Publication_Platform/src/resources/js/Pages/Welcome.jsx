import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome() {
    const { auth } = usePage().props;
    const [selectedArticle, setSelectedArticle] = useState(null);

    const sampleArticles = [
        {
            id: 1,
            title: 'How to Study Smarter With Active Recall',
            author: 'Mia Santos',
            category: 'Study Tips',
            excerpt:
                'A practical guide to creating flashcard loops, short review sessions, and exam-week routines that actually stick.',
            content:
                'Active recall works best when your review sessions are short and repeated. Start by writing key concepts into question form, then answer from memory before checking notes. Schedule reviews over 1 day, 3 days, and 7 days to strengthen retention.',
        },
        {
            id: 2,
            title: 'Campus Budgeting 101: Save More Each Week',
            author: 'Noah Rivera',
            category: 'Student Life',
            excerpt:
                'Simple budget rules for transport, meals, and school materials so you can cut expenses without sacrificing essentials.',
            content:
                'Split your allowance into fixed and flexible buckets. Keep transport and school supplies in fixed spending, then cap food and lifestyle spending by week. Track every purchase for 14 days and identify patterns before changing your routine.',
        },
        {
            id: 3,
            title: 'Writing Strong Introductions for Research Papers',
            author: 'Alyssa Cruz',
            category: 'Academic Writing',
            excerpt:
                'Learn a reliable structure for hooks, thesis setup, and context framing to make your first paragraph compelling.',
            content:
                'A strong introduction usually has three parts: context, gap, and thesis direction. First, establish the topic importance. Next, identify what is missing in current discussions. Finally, state your paper objective clearly and preview your scope.',
        },
    ];

    return (
        <>
            <Head title="Campus Quill" />
            <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
                <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
                <div className="pointer-events-none absolute left-1/2 top-24 h-52 w-52 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

                <header className="relative border-b border-slate-800/80">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                        <div className="inline-flex items-center gap-3">
                            <ApplicationLogo className="h-10 w-10" />
                            <div>
                                <h1 className="text-lg font-bold text-white">Campus Quill</h1>
                                <p className="text-xs text-slate-400">Student Publishing Platform</p>
                            </div>
                        </div>

                        <nav className="flex gap-3">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:scale-105"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md border border-slate-600 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:scale-105"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <main className="relative mx-auto max-w-6xl px-6 py-20">
                    <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                        Campus Knowledge Hub
                    </p>
                    <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl">
                        Share ideas, discover authors, and publish with confidence.
                    </h2>
                    <p className="mt-6 max-w-3xl text-slate-300">
                        Campus Quill is a collaborative publication space where students learn from curated articles and writers build their portfolio through quality content.
                    </p>
                    <p className="mt-3 max-w-3xl text-slate-300">
                        Every article displays its author, category, and status clearly so readers can trust the source and follow contributors they like.
                    </p>

                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        <div className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/30">
                            <h3 className="text-lg font-bold text-emerald-200">Learn With Verified Sources</h3>
                            <p className="mt-2 text-sm text-slate-200">Read student-friendly content reviewed by admins and tagged by topic.</p>
                        </div>
                        <div className="rounded-2xl border border-amber-300/30 bg-amber-400/10 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-900/30">
                            <h3 className="text-lg font-bold text-amber-200">Build Your Writer Identity</h3>
                            <p className="mt-2 text-sm text-slate-200">Publish under your name, receive comments, and grow your writing profile.</p>
                        </div>
                        <div className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/30">
                            <h3 className="text-lg font-bold text-cyan-200">Moderation That Protects Quality</h3>
                            <p className="mt-2 text-sm text-slate-200">Admins approve writers and keep article standards strong for everyone.</p>
                        </div>
                    </div>

                    <section className="mt-16">
                        <div className="mb-5 flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-white">Example Articles</h3>
                            {!auth.user && (
                                <Link
                                    href={route('register')}
                                    className="rounded-md border border-cyan-300/40 bg-cyan-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200 transition hover:bg-cyan-400/20"
                                >
                                    Start Writing
                                </Link>
                            )}
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            {sampleArticles.map((article) => (
                                <button
                                    key={article.id}
                                    type="button"
                                    onClick={() => setSelectedArticle(article)}
                                    className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-900/30"
                                >
                                    <span className="inline-flex rounded-full border border-slate-600 px-2 py-1 text-[11px] uppercase tracking-wide text-slate-300">
                                        {article.category}
                                    </span>
                                    <h4 className="mt-3 text-lg font-bold text-white">{article.title}</h4>
                                    <p className="mt-2 text-sm text-slate-300">{article.excerpt}</p>
                                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                                        Author: {article.author}
                                    </p>
                                    <p className="mt-3 text-xs text-cyan-200 underline">Click to read preview</p>
                                </button>
                            ))}
                        </div>
                    </section>
                </main>

                {selectedArticle && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4">
                        <div className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
                            <div className="mb-4 flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-cyan-300">{selectedArticle.category}</p>
                                    <h3 className="mt-1 text-2xl font-bold text-white">{selectedArticle.title}</h3>
                                    <p className="mt-2 text-sm text-slate-300">Author: {selectedArticle.author}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSelectedArticle(null)}
                                    className="rounded-md border border-slate-600 px-3 py-1 text-sm text-slate-200 hover:bg-slate-800"
                                >
                                    Close
                                </button>
                            </div>
                            <p className="leading-7 text-slate-200">{selectedArticle.content}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
